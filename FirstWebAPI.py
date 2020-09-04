from flask import Flask
import requests

url = "https://www.alphavantage.co/query"

querystring = {"function":"TIME_SERIES_INTRADAY","symbol":"MSFT","interval":"1min","apikey":"0A4V8SW22I040EAP"}

payload = ""
headers = {
    'cache-control': "no-cache",
    'Postman-Token': "8b66fa10-7683-43b9-9752-dccacd9fde67"
    }

response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

app = Flask(__name__)
@app.route('/')
def home():
    return response.text
