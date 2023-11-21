import os

from flask import (
    Flask,
    make_response,
    redirect,
    render_template,
    request,
    send_from_directory,
    session,
)
from flask_cors import CORS
from flask_helmet import FlaskHelmet
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFError, generate_csrf

from .api.recipes import recipes
from .api.sessions import sessions
from .api.users import users
from .config import Config
from .models import User, db
from .seeds import seed_commands

app = Flask(__name__, static_folder="../react-app/build", static_url_path="/")

# Setup login manager
login = LoginManager(app)
login.login_view = "sessions.restore"


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(users, url_prefix="/api/users")
app.register_blueprint(sessions, url_prefix="/api/sessions")
app.register_blueprint(recipes, url_prefix="/api/recipes")
db.init_app(app)
Migrate(app, db)

# Application Security
if os.environ.get("FLASK_DEBUG") == "1":
    CORS(app, supports_credentials=True, resources={r"/api/*": {"origins": "http://localhost:3000"}})
else:
    FlaskHelmet(app)


# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........
@app.before_request
def https_redirect():
    if os.environ.get("FLASK_DEBUG") == "0":
        if request.headers.get("X-Forwarded-Proto") == "http":
            url = request.url.replace("http://", "https://", 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        "csrf_token",
        generate_csrf(),
        secure=True if os.environ.get("FLASK_DEBUG") == "0" else False,
        samesite="Strict" if os.environ.get("FLASK_DEBUG") == "0" else None,
        httponly=True,
    )

    return response


@app.route("/api/docs")
def api_help():
    """Returns all API routes and their doc strings"""
    acceptable_methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    route_list = {}
    rules = app.url_map.iter_rules()

    for rule in rules:
        if rule.endpoint != "static":
            if rule.rule not in route_list:
                route_list[rule.rule] = {}
            for method in rule.methods:
                if method in acceptable_methods:
                    route_list[rule.rule][method] = app.view_functions[rule.endpoint].__doc__

    return route_list


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def react_root(path):
    """This route will direct to the public directory in our react builds in the production environment for favicon or index.html requests"""
    if path == "favicon.ico":
        return send_from_directory(app.static_folder, "public/favicon.ico")
    return app.send_static_file("index.html")


@app.errorhandler(404)
def not_found(err):
    return app.send_static_file("index.html")


@app.errorhandler(CSRFError)
def handle_csrf_error(err):
    res = make_response({"errors": {"csrf": err.description}}, 400)
    return res
