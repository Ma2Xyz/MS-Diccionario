from flask import Flask, render_template, request, redirect, url_for
from bs4 import BeautifulSoup
from requests import *
from constants import *

app = Flask(__name__)

@app.route("/")
def popup():
    return render_template ("popup.html")

@app.route("/palabra", methods=["POST"])
def busca_palabra():
    base_url = "http://www.wordreference.com/definicion/"
    if Flask.method == "POST":
        Palabra = request.form["Palabra"]
        endpoint = url = f"{base_url}{Palabra}"
        page_response = request.get(url, timeout=5)
        page_content = BeautifulSoup(page_response.content, "html.parser")
        Definiciones = page_content.find_all("li")
        for li in Definiciones:
            Definicion = map(lambda data: str(data.text), Definiciones)
    return (Definicion)
    

if __name__ == '__main__':
    app.run(port = 3000, debug = True)
