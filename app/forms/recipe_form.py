from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

from app.models import User
# , Recipe


def recipe_exists(form, field):
    # Checking if recipe exists
    url = field.data
    # recipe = Recipe.query.filter(Recipe.url == url).first()
    # if recipe:
    #     raise ValidationError('Recipe already added.')

class RecipeForm(FlaskForm):
    url = StringField('url', validators = [DataRequired(), recipe_exists])
    # first_name = StringField('first_name', validators=[DataRequired()])
    # last_name = StringField('last_name', validators=[DataRequired()])
    # username = StringField('username', validators=[DataRequired(), username_exists])
    # email = StringField('email', validators=[DataRequired(), user_exists])
    # password = StringField('password', validators=[DataRequired()])
