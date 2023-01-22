from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_author
DATABASE = "books_schema"

class Book:
    def __init__( self , data ):
        self.id = data['id']
        self.title = data['title']
        self.favorited = []
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls,data):
        query = "INSERT INTO books ( title , num_of_pages ) VALUES ( %(title)s , %(num_of_pages)s );"
        return connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        results = connectToMySQL(DATABASE).query_db(query)
        books = []
        for book in results:
            print(book)
            books.append( cls(book) )
        return books

    @classmethod
    def get_one_with_favorited(cls,data):
        query = "SELECT * FROM books LEFT JOIN favorites ON books.id = favorites.book_id LEFT JOIN authors ON favorites.author_id = authors.id WHERE books.id = %(id)s"
        results = connectToMySQL(DATABASE).query_db( query, data)
        book = cls(results[0])
        for row in results:
            author = {
                "id" : row["authors.id"],
                "first_name" : row["first_name"],
                "last_name" : row["last_name"],
                "created_at" : row["authors.created_at"],
                "updated_at" : row["authors.updated_at"]
            }
            book.favorited.append( model_author.Author( author ))
        return book

    @classmethod
    def get_nonfavorited_authors(cls,data):
        query = "SELECT * FROM authors WHERE authors.id NOT IN (SELECT author_id FROM favorites WHERE book_id = %(id)s )"
        results = connectToMySQL(DATABASE).query_db(query, data)
        authors = []
        for author in results:
            authors.append( model_author.Author(author))
        return authors