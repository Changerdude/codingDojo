from flask_app.config.mysqlconnection import connectToMySQL
DATABASE = "dojos_and_ninjas_schema"

class Ninja:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.dojo_id = data['dojo_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls,data):
        query = "INSERT INTO ninjas ( first_name , last_name , age , dojo_id ) VALUES ( %(first_name)s , %(last_name)s , %(age)s , %(dojo_id)s);"
        return connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL(DATABASE).query_db(query)
        ninjas = []
        for ninja in results:
            print(ninja)
            ninjas.append( cls(ninja) )
        return ninjas

    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM ninjas WHERE id = %(id)s"
        return cls(connectToMySQL(DATABASE).query_db( query, data)[0])

    @classmethod
    def update(cls,data):
        query = "UPDATE ninjas SET first_name = %(first_name)s, last_name = %(last_name)s, age = %(age)s, dojo_id = %(dojo_id)s updated_at = NOW() WHERE id = %(id)s"
        connectToMySQL(DATABASE).query_db( query, data)

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM ninjas WHERE id = %(id)s"
        connectToMySQL(DATABASE).query_db( query, data)