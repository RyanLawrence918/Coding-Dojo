from flask import Flask, render_template, request, session
app = Flask(__name__)
app.secret_key = "supersecret"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/result", methods=["POST"])
def result():
    return render_template("result.html", name = request.form["Name"], location = request.form["Location"], language = request.form["Language"], comment = request.form["comment"])

if __name__ == "__main__":
    app.run(debug = True)