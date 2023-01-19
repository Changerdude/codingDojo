from flask_app import app
from flask_app.models.model_user import User
from flask import render_template,redirect,session,request

@app.route("/users")
def users():
    return render_template("index.html" , users=User.get_all())

@app.route("/users/new")
def users_new():
    return render_template("user_form.html")

@app.route("/users/create", methods=["POST"])
def users_create():
    data = {
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"]
    }
    User.create(data)
    return redirect("/users")
