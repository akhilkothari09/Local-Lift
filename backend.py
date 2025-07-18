import firebase_admin
from firebase_admin import credentials, db
from flask import Flask, request, jsonify

app = Flask(__name__)

cred = credentials.Certificate("firebase-adminsdk.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://your-app.firebaseio.com/'
})

@app.route('/update-location', methods=['POST'])
def update_location():
    data = request.get_json()
    lat = data.get('lat')
    lng = data.get('lng')
    if lat and lng:
        ref = db.reference('vehicle_location')
        ref.set({'lat': lat, 'lng': lng})
        return jsonify({"message": "Location updated"}), 200
    return jsonify({"error": "Missing coordinates"}), 400

if __name__ == '__main__':
    app.run(debug=True)