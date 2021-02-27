from flask import Flask


app = Flask(__name__)


@app.route('/')
def homepage():
    return '<h1>Hello, world!</h1>'