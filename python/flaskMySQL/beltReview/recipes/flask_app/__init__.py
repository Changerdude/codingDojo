from flask import Flask
from flask_bcrypt import Bcrypt
DATABASE = "recipe_schema"
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "No dont do it"