from flask_app.config.mysqlconnection import connectToMySQL
DATABASE = "books_schema"

class Favorite:
    def __init__( self , data ):
        self.id = data['id']
        self.author_id = data['author_id']
        self.book_id = data['book_it']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def add_fav(cls,data):
        query = "INSERT INTO favorites (author_id,book_id) VALUES (%(author_id)s,%(book_id)s)"
        return connectToMySQL(DATABASE).query_db( query, data )