from flask import Flask, jsonify, request
from flask_cors import CORS
from textblob import TextBlob
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

@app.route('/testing', methods=['GET', 'POST'])
def hello_world():
    k = request.get_json()
    url = k["key"]

    # return jsonify(url)
    try:
        f = requests.get(url)
    except:
        return jsonify("Please enter a URL.")
    soup = BeautifulSoup(f.text, "html") 
    text_list = soup.find_all("p")
    text = ""
    for i in text_list:
        text += i.getText()
    if text == "":
        return jsonify("We could not find any article in this URL.")
    analysis = TextBlob(text)
    sub = int(analysis.sentiment.subjectivity * 100)
    toReturn = "This news has subjectivity " + str(sub) + "%."
    return jsonify(toReturn)