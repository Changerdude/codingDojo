from flask import Flask, render_template
app = Flask(__name__)

@app.route('/play')
def default():
    return render_template("index.html", color="aqua", times=3)

@app.route('/play/<inp_time>')
def repeat(inp_time):
    if inp_time.isnumeric():
        inp_time = int(inp_time)
        return render_template("index.html", color="aqua", times = inp_time)
    return "Failure, please try again."

@app.route('/play/<inp_time>/<inp_color>')
def repeat_color_change(inp_time,inp_color):
    if inp_time.isnumeric():
        inp_time = int(inp_time)
        return render_template("index.html", color = inp_color, times = inp_time)
    return "Failure, please try again."

@app.route('/<path:u_path>')
def wildcard_catch(u_path):
    return f"No path:{u_path} exists."

if __name__=="__main__":
    app.run(debug=True)

