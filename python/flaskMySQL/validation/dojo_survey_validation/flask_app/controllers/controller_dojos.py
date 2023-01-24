from flask_app import app
from flask_app.models.model_dojo import Dojo
from flask import session,render_template,redirect,request,flash

@app.route('/dojos/create', methods=["POST"])
def dojos_create():
    data ={
        'location': "",
        'language': "",
        'hours_spent': "",
        **request.form,
        "attend" : Dojo.get_attend(request.form)
    }
    print(data)
    if not Dojo.validate_form(data):
        return redirect("/")
    session["id"] = Dojo.create(data)
    return redirect('/dojos/show')

@app.route('/')
def default():
    session["id"] = None
    return render_template("index.html")

@app.route('/dojos/show')
def post_result():
    return render_template("result.html", dojo=Dojo.get_dojo({"id":session["id"]}))