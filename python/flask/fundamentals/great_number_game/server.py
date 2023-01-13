from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "dontLOOOOOK"

@app.route('/')
def default():
    if "count" not in session:
        session["count"] = 0
    if "amount_of_guesses" not in session:
        session["amount_of_guesses"] = 5
    if "number" not in session:
        session["number"] = random.randint(1,100)
    
    return render_template("index.html")

@app.route('/guess', methods=["POST"])
def guess():
    if "num_guess" in request.form:
        num_guess = int(request.form["num_guess"])
        session["last_guess"] = request.form["num_guess"]
        if num_guess > session["number"]:
            session["guess"] = "high"
        elif num_guess < session["number"]:
            session["guess"] = "low"
        else:
            session["guess"] = "win"
        
    session["count"] += 1
    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    session["number"] = random.randint(1,100)
    return redirect('/')


if __name__=="__main__":
    app.run(debug=True)