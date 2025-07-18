## Local Lift – Real-Time Vehicle Tracking System

This project is a GPS-based real-time vehicle tracking system designed for monitoring public or private vehicles. It includes a web interface for live map visualization, driver coordination, and location updates.

## 🔧 Features

- Live vehicle location tracking on Google Maps
- Admin dashboard with real-time updates using Firebase
- Responsive frontend using HTML, CSS, JavaScript, and Bootstrap
- Python backend with Flask for handling location updates

## 🚀 Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap, Google Maps API
- **Backend:** Python, Flask
- **Database:** Firebase Realtime Database

## 📦 Project Structure

```
Local_Lift_Tracking_System/
│
├── index.html              # Main webpage
├── styles.css              # CSS styles
├── script.js               # JS logic including Google Maps and Firebase
├── backend.py              # Flask backend to update location in Firebase
├── firebase-adminsdk.json  # Firebase admin credentials (replace with your own)
└── README.md               # Project documentation
```

## 🛠️ Setup Instructions

1. Replace the placeholder API keys in `index.html` and `script.js` with your actual:
   - Google Maps API key
   - Firebase config keys

2. Install dependencies:
```bash
pip install flask firebase-admin
```

3. Start the backend server:
```bash
python backend.py<img width="259" height="433" alt="2" src="https://github.com/user-attachments/assets/b51d0d7a-1199-4f4c-9b64-2b3c5f71615c" />

```

4. Open `index.html` in your browser to view the tracking system.

## 🧠 How it Works

- The driver’s app or device sends latitude and longitude to the backend.
- Backend updates the data in Firebase.
- The frontend listens to Firebase changes and updates the Google Map marker in real time.

## 📍 Example Use Cases

- School bus tracking
- Local transport vehicles
- Delivery fleet monitoring

## 👨‍💻 Author

**Akhil Kothari**  
Recent B.Tech (ECE) graduate with interests in Embedded Systems and Software Engineering.


![Uploading 2.png…]()
