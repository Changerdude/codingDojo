from flask import flash
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data["language"]
        self.hours_spent = data["hours_spent"]
        self.attend = data["attend"]
        self.comment = data["comment"]
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def create(cls,data):
        query = "INSERT INTO dojos ( name , location , language , comment , hours_spent , attend ) VALUES ( %(name)s , %(location)s , %(language)s , %(comment)s , %(hours_spent)s , %(attend)s);"
        return connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def get_dojo(cls,data):
        query = "SELECT * FROM dojos WHERE id = %(id)s"
        results = connectToMySQL(DATABASE).query_db( query, data)
        return cls(results[0])


    @classmethod
    def validate_form(cls,data):
        is_valid = True
        if len(data['name']) < 1:
            flash("Needs a name", "err_name_create")
            print("name")
            is_valid = False
        if len(data['location']) < 1:
            flash("Select a location", "err_location_create")
            print("location")
            is_valid = False
        if len(data['language']) < 1:
            flash("Select a language", "err_language_create")
            print("language")
            is_valid = False
        if len(data['hours_spent']) < 1:
            flash("Select hours spent", "err_hours_spent_create")
            print("hours")
            is_valid = False
        if data['attend'] < 1:
            flash("Not even one day!?", "err_attend_create")
            print("hours")
            is_valid = False
        if len(data['comment']) < 1:
            flash("Make comments please", "err_comment_create")
            print("hours")
            is_valid = False
        print(is_valid)
        return is_valid

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
