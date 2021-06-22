from flask import Flask, render_template, request as req, redirect, url_for
from bs4 import BeautifulSoup
from flask.helpers import flash
import requests as request_page
from constants import *


app = Flask(__name__)

@app.route("/")
def popup():
    return render_template ("popup.html")

@app.route("/palabra", methods=["POST"])
def busca_palabra():
    if req.method == "POST":
        base_url = "http://www.wordreference.com/definicion/"
        Palabra = req.form["Palabra"]
        endpoint = url = f"{base_url}{Palabra}"
        page_response = request_page.get(url, timeout=5)
        page_content = BeautifulSoup(page_response.content, "html.parser")
        Definiciones = page_content.find_all("ol")
        return (str(Definiciones))
    
if __name__ == '__main__':
    app.run(port = 3000, debug = True)