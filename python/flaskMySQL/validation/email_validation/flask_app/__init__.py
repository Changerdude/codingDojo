from flask import Flask
DATABASE = "email_schema"
app = Flask(__name__)
app.secret_key = "No dont do it"