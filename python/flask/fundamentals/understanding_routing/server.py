from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<input_str>')
def say(input_str):
    if type(input_str) == str:
        return f"Hi {input_str}!"
    else:
        return "Did not pass in a string"

@app.route('/repeat/<num>/<input_str>')
def repeat(num,input_str):
    if num.isnumeric():
        num = int(num)
    if type(num) != int:
        return "Repeat amount needs to be an integer"
    if type(input_str) != str:
        return "Saying needs to be a string"
    result = input_str
    for i in range(int(num) - 1):
        result += " " + input_str
    return result

@app.route('/<path>')          #Wildcard I believe would eat any other request if it was at or near the top
def wildcard_error(path):      #Needs to be at the bottom to be the last route tried
    return f"Sorry! No response from {path}. Try again."

if __name__=="__main__":
    app.run(debug=True)

