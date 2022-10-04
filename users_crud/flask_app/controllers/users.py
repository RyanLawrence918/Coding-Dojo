from flask_app import app
from flask import Flask, render_template, request, redirect
from flask_app.models.user import User

@app.route("/")
def index():
    users = User.get_all_users()
    print(users)
    return render_template("read_all.html", all_users = users)

@app.route("/create")
def create_user_page():
    return render_template("create.html")

@app.route("/create_user", methods=["POST"])
def create_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]
    }

    User.new_user(data)

    return redirect("/")