from flask import flash
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z0]')
PW_REGEX = re.compile(r'^(.*[A-Z].*)(.*\d.*)')

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.pw_hash = data['pw_hash']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def create(cls,data):
        query = "INSERT INTO users ( first_name , last_name , email , pw_hash ) VALUES ( %(first_name)s , %(last_name)s , %(email)s , %(pw_hash)s );"
        return connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def get_users(cls):
        query = "SELECT * FROM users"
        results = connectToMySQL(DATABASE).query_db( query )
        users = []
        for user in results:
            users.append( cls(user) )
        return users

    @classmethod
    def get_user(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        result = connectToMySQL(DATABASE).query_db( query, data )
        return cls(result[0])

    @classmethod
    def get_user_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        result = connectToMySQL(DATABASE).query_db( query, data)
        if result:
            return cls(result[0])
        return False

    @classmethod
    def user_delete(cls,data):
        query = "DELETE FROM users WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def validate_registration(cls,data):
        is_valid = True
        if len(data['first_name']) < 2:
            flash("Needs a first name", "err_first_name_create")
            is_valid = False
        elif not NAME_REGEX.match(data['first_name']):
            flash("First name should only have letters", "err_first_name_create")
            is_valid = False
        if len(data['last_name']) < 2:
            flash("Needs a last name", "err_last_name_create")
            is_valid = False
        elif not NAME_REGEX.match(data['last_name']):
            flash("Last name should have only letters", "err_last_name_create")
            is_valid = False
        if len(data['email']) < 1:
            flash("Needs a email", "err_email_create")
            is_valid = False
        elif not EMAIL_REGEX.match(data["email"]):
            flash("Needs a valid email", "err_email_create")
            is_valid = False
        elif cls.get_user_by_email({"email":data["email"]}):
            flash("Email already exists", "err_email_create")
            is_valid = False
        if len(data['pw']) < 8:
            flash("Need a password at least 8 characters long", "err_pw_create")
            is_valid = False
        elif not PW_REGEX.match(data['pw']):
            flash("Password needs at least one capitol and one number", "err_pw_create")
            is_valid = False
        if len(data['pw_confirm']) < 1:
            flash("Need to confirm password", "err_pw_confirm_create")
            is_valid = False
        elif data['pw'] != data['pw_confirm']:
            flash("Passwords do not match", "err_pw_confirm_create")
            is_valid = False
        return is_valid