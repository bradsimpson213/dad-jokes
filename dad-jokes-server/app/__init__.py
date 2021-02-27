from flask import Flask
rom config import Config

app = Flask(__name__)

app.config.from_object(Config)


@app.route('/')
def homepage():
    return '<h1>Hello, world!</h1>'