from flask_app import app
from flask_app.models.model_book import Book
from flask import render_template,redirect,session,request

@app.route("/books")
def books():
    return render_template("new_books.html" , books=Book.get_all())

@app.route("/books/show/<int:id>")
def show_book(id):
    data = {
        "id" : id
    }
    book = Book.get_one_with_favorited(data)
    return render_template("show_books.html", book = book, add_fav = Book.get_nonfavorited_authors)

@app.route("/books/create", methods=["POST"])
def books_create():
    data = {
        "name" : request.form["name"]
    }
    Book.create(data)
    return redirect("/books")

    #TODO Route Fav