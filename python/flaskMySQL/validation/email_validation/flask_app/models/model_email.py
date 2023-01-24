from flask import flash
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Email:
    def __init__( self , data ):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def create(cls,data):
        query = "INSERT INTO emails ( email  ) VALUES ( %(email)s );"
        return connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def get_emails(cls):
        query = "SELECT * FROM emails"
        results = connectToMySQL(DATABASE).query_db( query )
        emails = []
        for email in results:
            emails.append( cls(email) )
        return emails


    @classmethod
    def validate_form(cls,data):
        is_valid = True
        if len(data['email']) < 1:
            flash("Needs a email", "err_email_create")
            is_valid = False
        elif not EMAIL_REGEX.match(data["email"]):
            flash("Needs a valid email", "err_email_create")
            is_valid = False
        elif cls.email_exists({"email":data["email"]}):
            flash("Email already exists", "err_email_create")
            is_valid = False
        return is_valid

    @classmethod
    def email_exists(cls,data):
        query = "SELECT * FROM emails WHERE email = %(email)s"
        results = connectToMySQL(DATABASE).query_db( query, data)
        return results

    @staticmethod
    def get_attend(data):
        days = 0
        if "mon" in data:
            days += 1
        if "tue" in data:
            days += 1
        if "wed" in data:
            days += 1
        if "thu" in data:
            days += 1
        if "fri" in data:
            days += 1
        return days
