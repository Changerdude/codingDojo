from flask import Flask
from flask_app.controllers import controller_routes,controller_books,controller_authors
from flask_app import app
# app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)

