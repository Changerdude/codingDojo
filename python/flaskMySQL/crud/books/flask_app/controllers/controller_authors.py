from flask_app import app
from flask_app.models.model_author import Author
from flask_app.models.model_favorite import Favorite
from flask import render_template,redirect,session,request

@app.route("/authors/create", methods=["POST"])
def authors_create():
    data = {
        **request.form
    }
    Author.create(data)
    return redirect("/authors")

@app.route("/authors")
def authors_new():
    return render_template("new_authors.html", authors = Author.get_all())

@app.route("/authors/show/<int:id>")
def authors_show(id):
    data = {
        "id" : id
    }
    author = Author.get_one_with_favorites(data)
    return render_template("show_authors.html", author = author, add_fav = Author.get_nonfavorite_books(data))

@app.route("/authors/fav", methods=["POST"])
def authors_fav():
    data = {
        "book_id" : request.form["book_id"],
        "author_id" : request.form["author_id"]
    }
    Favorite.add_fav(data)
    return redirect("/authors/show/" + data["author_id"])