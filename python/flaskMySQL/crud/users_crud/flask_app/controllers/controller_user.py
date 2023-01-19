from flask_app import app
from flask_app.models.model_user import User
from flask import render_template,redirect,session,request

@app.route("/users")
def users():
    return render_template("index.html" , users=User.get_all())

@app.route("/users/show/<int:id>")
def show_user(id):
    data = {
        "id" : id
    }
    user = User.read_one(data)
    return render_template("show_user.html", user = user)

@app.route("/users/new")
def users_new():
    return render_template("user_form.html", mode = "create")

@app.route("/users/create", methods=["POST"])
def users_create():
    data = {
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"]
    }
    User.create(data)
    return redirect("/users")

@app.route("/users/edit/<int:id>")
def edit(id):
    data = {
        "id" : id
    }
    user = User.read_one(data)
    return render_template("user_form.html", user = user, mode = "update")

@app.route("/users/update", methods=["POST"])
def update():
    data = data = {
        "id" : request.form["id"],
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"]
    }
    User.update(data)
    return redirect(f"/users/show/{data['id']}")

@app.route("/users/delete/<int:id>")
def delete(id):
    data = {
        "id" : id
    }
    User.delete(data)
    return redirect("/users")

