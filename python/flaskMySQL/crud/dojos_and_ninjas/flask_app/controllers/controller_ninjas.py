from flask_app import app
from flask_app.models.model_ninja import Ninja
from flask_app.models.model_dojo import Dojo
from flask import render_template,redirect,session,request

@app.route("/ninjas/new")
def ninjas_new():
    return render_template("form_ninja.html", dojos = Dojo.get_all())

@app.route("/ninjas/create", methods=["POST"])
def ninjas_create():
    data = {
        **request.form
    }
    Ninja.create(data)
    return redirect("/dojos")