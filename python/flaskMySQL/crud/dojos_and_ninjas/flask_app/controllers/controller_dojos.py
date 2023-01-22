from flask_app import app
from flask_app.models.model_dojo import Dojo
from flask import render_template,redirect,session,request

@app.route("/dojos")
def dojos():
    return render_template("index.html" , dojos=Dojo.get_all())

@app.route("/dojos/show/<int:id>")
def show_dojo(id):
    data = {
        "id" : id
    }
    dojo = Dojo.get_one_with_ninjas(data)
    return render_template("show_dojos.html", dojo = dojo)

@app.route("/dojos/create", methods=["POST"])
def dojos_create():
    data = {
        "name" : request.form["name"]
    }
    Dojo.create(data)
    return redirect("/dojos")