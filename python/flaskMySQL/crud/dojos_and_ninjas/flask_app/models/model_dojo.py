from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_ninja
DATABASE = "dojos_and_ninjas_schema"

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.ninjas = []
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls,data):
        query = "INSERT INTO dojos ( name  ) VALUES ( %(name)s );"
        return connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        dojos = []
        for dojo in results:
            print(dojo)
            dojos.append( cls(dojo) )
        return dojos

    @classmethod
    def get_one_with_ninjas(cls,data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s"
        results = connectToMySQL(DATABASE).query_db( query, data)
        dojo = cls(results[0])
        for row in results:
            ninjas = {
                "id" : row["ninjas.id"],
                "first_name" : row["first_name"],
                "last_name" : row["last_name"],
                "age" : row["age"],
                "dojo_id" : row["dojo_id"],
                "created_at" : row["ninjas.id"],
                "updated_at" : row["ninjas.updated_at"]
            }
            dojo.ninjas.append( model_ninja.Ninja( ninjas ))
        return dojo