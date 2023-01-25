from flask_app import app
from flask_app.models.model_user import User
from flask_app.models.model_recipe import Recipe
from flask import session,render_template,redirect,request,flash

@app.route('/')
def default():
    if 'uuid' in session:
        return redirect('/dashboard')
    return render_template("index.html")

@app.route('/dashboard')
def dashboard():
    if 'uuid' in session:
        user = User.get_user({'id':session['uuid']})
        return render_template("dashboard.html", user = user , recipes = Recipe.get_recipes() )
    return redirect('/')