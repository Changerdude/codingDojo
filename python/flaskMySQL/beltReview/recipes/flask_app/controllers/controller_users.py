from flask_app import app,bcrypt,TEN_YEARS_AGO
from flask_app.models.model_user import User
from flask import session,render_template,redirect,request,flash

@app.route('/register', methods=["POST"])
def register():
    data ={
        **request.form,
    }
    print(data)
    if not User.validate_registration(data):
        return redirect("/")
    data['pw_hash'] = bcrypt.generate_password_hash(data['pw'])
    session['uuid'] = User.create(data)
    return redirect('/dashboard')

@app.route('/login', methods=['POST'])
def login():
    data ={ 'email' : request.form['email']}
    user_attempt = User.get_user_by_email(data)
    print(user_attempt)
    if not user_attempt:
        flash("Invalid email password combination", "err_email_login")
        return redirect("/")
    if not bcrypt.check_password_hash(user_attempt.pw_hash, request.form['pw']):
        flash("Invalid email password combination", "err_email_login")
        return redirect("/")
    session['uuid'] = user_attempt.id
    return redirect('/dashboard')

@app.route('/logout')
def logout():
    session.pop('uuid')
    return redirect('/')