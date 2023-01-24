from flask import Flask
DATABASE = "dojo_survey_schema"
app = Flask(__name__)
app.secret_key = "No dont do it"