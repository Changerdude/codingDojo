from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)
app.secret_key = "Dont look its secret"

@app.route('/')
def default():
    if "increment" not in session:
        session["increment"] = 1
    if "counter" in session:
        session["counter"] += session["increment"]
    else:
        session["counter"] = 1

    return render_template("index.html")

@app.route('/increment', methods=['POST'])
def increment():
    session["counter"] += session["increment"]
    return redirect('/')

@app.route('/change_increment', methods=['POST'])
def change_increment():
    if len(request.form["new_increment"]) > 0:
        session["increment"] = int(request.form["new_increment"])
    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')


if __name__=="__main__":
    app.run(debug=True)