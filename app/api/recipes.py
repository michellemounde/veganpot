from flask import Blueprint, jsonify, request, session

from app.forms import RecipeForm
from app.models import User, db
from app.utils import scrape_recipe, validation_errors_to_error_messages

recipes = Blueprint("recipes", __name__)


@recipes.route("/", methods=["POST"])
def add_recipe():
    """Adds a recipe to the users recipes"""
    form = RecipeForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually so validate_on_submit can be used
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        # Scrape the recipe and add it
        scrape_recipe(form.data["url"])
        recipe = {}
        # recipe = scrape_recipe(form.data['url'])
        # return jsonify(recipe=recipe.to_dict())
        return recipe
    return jsonify(errors=validation_errors_to_error_messages(form.errors)), 401
