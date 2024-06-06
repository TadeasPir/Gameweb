from flask import Flask, jsonify, session, request
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_session import Session
from config import ApplicationConfig
from models import db, User

app = Flask(__name__)   # Creating flask application
app.config.from_object(ApplicationConfig)   # Loading config

bcrypt = Bcrypt(app)    # So bcrypt will work or smt
CORS(app, supports_credentials=True)    # Enabling CORS
server_session = Session(app)   # Enabling server-side sessions
db.init_app(app)
current_email = ""
wrong_counter = 0

with app.app_context():
    db.create_all() # Creating database

# Route for checking, if user is logged in
@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")    # tries to retrieve user id from current session

    if not user_id: # if the user id does not exist, send an error
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first() # retrieve the user
    return jsonify({    # send the user id and email to frontend
        "id": user.id,
        "email": user.email
    })

# Route for registering the user
@app.route("/register", methods=["POST"])
def register_user():
    # sets email and password from the request
    email = request.json["email"]
    password = request.json["password"]

   

    user_exists = User.query.filter_by(email=email).first() is not None # check if user exists

    if user_exists: # if user already exists, send and error
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)   # hash the password
    new_user = User(email=email, password=hashed_password)  # create new user
    db.session.add(new_user)    # add new user to session
    db.session.commit()
    
    session["user_id"] = new_user.id    # authenticate user

    return jsonify({    # send user id and email to frontend
        "id": new_user.id,
        "email": new_user.email
    })

# Route to login user
@app.route("/login", methods=["POST"])
def login_user():
    # sets eamil and password from request
    email = request.json["email"]
    password = request.json["password"]

    global current_email
    global wrong_counter

    if current_email == email:
        is_the_same = True
    else:
        is_the_same = False
    #is_the_same = current_email == email

    current_email = email

    user = User.query.filter_by(email=email).first()    # check if user exists

    if user is None:    
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password): # check if the password is correct
      
        if is_the_same:
          wrong_counter +=1
        
        if wrong_counter >=3:
            f = open("Backend\logs\logs.txt", "a")
            f.write(f"User {email} unsuccessfully logged {wrong_counter} times ")
            f.close()


        return jsonify({"error": "Unauthorized"}), 401
    
    wrong_counter = 0
    
    session["user_id"] = user.id    # authenticate the user

    return jsonify({    # send id and email to frontend
        "id": user.id,
        "email": user.email
    }) 

# Route to logout the user
@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")  # deauthenticate the user
    return "200"

# Start the application
if __name__ == '__main__':
    app.run(debug=True, port=8080)