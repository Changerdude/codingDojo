from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def default():
    return render_template("index.html", num_col=8, num_row=8,color1="red",color2="black")

@app.route('/<int:num_row>')
def one_arg(num_row):
    return render_template("index.html", num_col=8, num_row=num_row,color1="red",color2="black")

@app.route('/<int:num_row>/<int:num_col>')
def two_arg(num_row,num_col):
    return render_template("index.html", num_col=num_col, num_row=num_row,color1="red",color2="black")

@app.route('/<int:num_row>/<int:num_col>/<color1>/<color2>')
def four_arg(num_row,num_col,color1,color2):
    return render_template("index.html", num_col=num_col, num_row=num_row,color1=color1,color2=color2)

if __name__=="__main__":
    app.run(debug=True)