from flask_app import app
from flask_app.models.model_email import Email
from flask import session,render_template,redirect,request,flash

@app.route('/emails/val', methods=["POST"])
def emails_val():
    data ={
        **request.form,
    }
    print(data)
    if not Email.validate_form(data):
        return redirect("/")
    Email.create(data)
    flash(f"Your email {data['email']} was valid. Thank you!", "succ_email_create")
    return redirect('/emails/show')

@app.route('/')
def default():
    return render_template("index.html")

@app.route('/emails/show')
def emails_show():
    return render_template("emails.html", emails=Email.get_emails())

@app.route('/emails/delete/<int:id>')
def emails_delete(id):
    data = {
        "id" : id
    }
    Email.emails_delete(data)
    return redirect('/emails/show')