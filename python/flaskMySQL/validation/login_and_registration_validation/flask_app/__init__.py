from flask import Flask
from flask_bcrypt import Bcrypt
from datetime import date
from dateutil.relativedelta import relativedelta
DATABASE = "login_register_schema"
TEN_YEARS_AGO = str((date.today()) - relativedelta(years=10))
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "No dont do it"