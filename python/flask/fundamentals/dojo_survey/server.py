from flask import Flask, render_template, request, session, redirect
app = Flask(__name__)
app.secret_key = "uhoh"

@app.route('/')
def default():
    session.clear()
    return render_template("index.html")

@app.route('/result')
def post_result():
    return render_template("result.html")

@app.route('/result', methods=["POST"])
def get_result():
    session["name"] = request.form["name"]
    session["dojo_location"] = request.form["dojo_location"]
    session["fav_language"] = request.form["fav_language"]
    session["hours_spent"] = request.form["hours_spent"]
    if "attend" in request.form:
        session["attend"] = request.form["attend"]
    session["comments"] = request.form["comments"]
    return redirect('/result')



if __name__=="__main__":
    app.run(debug=True)