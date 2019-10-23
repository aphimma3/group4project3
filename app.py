from sqlalchemy import func

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://@localhost:5432/clt_hotspots"

db = SQLAlchemy(app)


class Lynx(db.Model):
    __tablename__ = 'lynx'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    latitude = db.Column(db.String(100))
    longitude = db.Column(db.String(100))
    category = db.Column(db.String(100))

class Restaurant(db.Model):
    __tablename__ = 'restaurants'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    latitude = db.Column(db.String(100))
    longitude = db.Column(db.String(100))
    category = db.Column(db.String(100))

class Attraction(db.Model):
    __tablename__ = 'attractions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    latitude = db.Column(db.String(100))
    longitude = db.Column(db.String(100))

    # def __repr__(self):
    #     return '<Pet %r>' % (self.nickname)


# @app.before_first_request
# def setup():
#     # Recreate database each time for demo
#     db.drop_all()
#     db.create_all()


# @app.route("/send", methods=["GET", "POST"])
# def send():
#     if request.method == "POST":
#         nickname = request.form["nickname"]
#         age = request.form["age"]

#         pet = Pet(nickname=nickname, age=age)
#         db.session.add(pet)
#         db.session.commit()

#         return "Thanks for the form data!"

#     return render_template("form.html")


@app.route("/api/lynx")
def list_stops():
    results = db.session.query(Lynx.name, Lynx.latitude, Lynx.longitude, Lynx.category).all()

    places = []
    for result in results:
        places.append({
            "name":  result[0],
            "latitude":  result[1],
            "longitude": result[2],
            "category":  result[3]
        })
    return jsonify(places)

@app.route("/api/restaurants")
def list_restaurants():
    results = db.session.query(Restaurant.name, Restaurant.latitude, Restaurant.longitude, Restaurant.category).all()

    places = []
    for result in results:
        places.append({
            "name":  result[0],
            "latitude":  result[1],
            "longitude": result[2],
            "category":  result[3]
        })
    return jsonify(places)

@app.route("/api/attractions")
def list_attractions():
    results = db.session.query(Attraction.name, Attraction.latitude, Attraction.longitude).all()

    places = []
    for result in results:
        places.append({
            "name":  result[0],
            "latitude":  result[1],
            "longitude": result[2]
        })
    return jsonify(places)


@app.route("/resources")
def resources():
    return render_template("resources.html")

@app.route("/team")
def team():
    return render_template("team.html")

@app.route("/lynx_data")
def lynx_data():
    return render_template("lynx_df.html")

@app.route("/attraction_data")
def attraction_data():
    return render_template("attractions_df.html")

@app.route("/restaurants_data")
def restaurants_data():
    return render_template("restaurants_df.html")

@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()
