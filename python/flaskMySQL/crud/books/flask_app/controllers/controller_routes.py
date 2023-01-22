from flask_app import app

from flask import render_template,redirect,session,request

@app.route("/")
def index():
    return redirect("/authors")