import requests

url = ("https://newsapi.org/v2/everything?q=equities&sortBy=popularity&apiKey=745acf1d08f845dd823b60387503e890")

response = requests.get(url)

print r.json