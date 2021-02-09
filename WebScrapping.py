from flask import Flask

app = Flask(__name__)


@app.route("/")
def popup():
    return "/templates/popup.html"
