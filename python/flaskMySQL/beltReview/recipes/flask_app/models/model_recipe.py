from flask import flash
from flask_app import DATABASE
from flask_app.models import model_user
from flask_app.config.mysqlconnection import connectToMySQL

class Recipe:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_made = data['date_made']
        self.under = data['under']
        self.user_id = data['user_id']
        self.posted_by = ''
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls,data):
        query = "INSERT INTO recipes ( name , description , instructions , date_made , under , user_id) VALUES ( %(name)s , %(description)s , %(instructions)s , %(date_made)s , %(under)s , %(user_id)s);"
        return connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def get_recipes(cls):
        query = "SELECT * FROM recipes"
        results = connectToMySQL(DATABASE).query_db( query )
        recipes = []
        for recipe in results:
            recipe = cls(recipe)
            recipe_user = model_user.User.get_user({'id' :recipe.user_id})
            recipe.posted_by = recipe_user.first_name
            recipes.append( recipe )
        return recipes

    @classmethod
    def get_recipe(cls,data):
        query = "SELECT * FROM recipes WHERE id = %(id)s"
        result = connectToMySQL(DATABASE).query_db( query, data )
        recipe = cls(result[0])
        recipe_user = model_user.User.get_user({'id' :recipe.user_id})
        recipe.posted_by = recipe_user.first_name
        return recipe

    @classmethod
    def update_recipe(cls,data):
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, date_made = %(date_made)s, under = %(under)s, user_id = %(user_id)s WHERE id = %(id)s"
        connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def delete_recipe(cls,data):
        query = "DELETE FROM recipes WHERE id = %(id)s"
        connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def validate_form(cls,data):
        is_valid = True
        if len(data['name']) < 3:
            flash("Needs a name", "err_recipe_name")
            is_valid = False
        if len(data['description']) < 3:
            flash("Needs a description", "err_recipe_description")
            is_valid = False
        if len(data['instructions']) < 3:
            flash("Needs instructions", "err_recipe_instructions")
            is_valid = False
        if len(data['date_made']) < 1:
            flash("Needs a date", "err_recipe_date_made")
            is_valid = False
        return is_valid