from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_book
DATABASE = "books_schema"

class Author:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.favorites = []
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls,data):
        query = "INSERT INTO authors ( first_name , last_name ) VALUES ( %(first_name)s , %(last_name)s);"
        return connectToMySQL(DATABASE).query_db( query, data )

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"
        results = connectToMySQL(DATABASE).query_db(query)
        authors = []
        for author in results:
            print(author)
            authors.append( cls(author) )
        return authors

    @classmethod
    def get_one_with_favorites(cls,data):
        query = "SELECT * FROM authors LEFT JOIN favorites ON authors.id = favorites.author_id LEFT JOIN books ON favorites.book_id = books.id WHERE authors.id = %(id)s"
        results = connectToMySQL(DATABASE).query_db( query, data)
        author = cls(results[0])
        for row in results:
            book = {
                "id" : row["books.id"],
                "title" : row["title"],
                "num_of_pages" : row["num_of_pages"],
                "created_at" : row["books.created_at"],
                "updated_at" : row["books.updated_at"]
            }
            author.favorites.append( model_book.Book( book ))
        print(author)
        return author

    @classmethod
    def get_nonfavorite_books(cls,data):
        query = "SELECT * FROM books WHERE books.id NOT IN (SELECT book_id FROM favorites WHERE author_id = %(id)s)"
        results = connectToMySQL(DATABASE).query_db( query, data)
        books = []
        for book in results:
            books.append( model_book.Book(book))
        print(books)
        return books