from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    print(request.form)
    order = {
        "strawberry": int(request.form["strawberry"]),
        "raspberry": int(request.form["raspberry"]),
        "apple": int(request.form["apple"]),
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "student_id": request.form["student_id"],
    }
    print(f"Charging {order['first_name']} for {order['strawberry'] + order['raspberry'] + order['apple']} fruits")
    return render_template("checkout.html", order=order)

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)    