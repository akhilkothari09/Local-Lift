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

![WhatsApp Image 2025-06-13 at 7 11 00 PM](https://github.com/user-attachments/assets/833e00b5-5ae3-4ce0-b84a-ba167ad97b6d)


## 🛠️ Setup Instructions

1. Replace the placeholder API keys in `index.html` and `script.js` with your actual:
   - Google Maps API key
   - Firebase config keys

2. Install dependencies:
```bash
pip install flask firebase-admin
```![WhatsApp Image 2025-07-18 at 3 57 32 PM](https://github.com/user-attachments/assets/aaa64efb-b6f5-480d-abd3-b78159a36e07)


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


!
<img width="235" height="435" alt="1" src="https://github.com/user-attachments/assets/a4f309a2-b5fd-408f-85be-312146189534" />
<img width="259" height="433" alt="2" src="https://github.com/user-attachments/assets/df5bd301-6eae-4ac3-bcbd-2ebd4dd29f92" />
<img width="236" height="435" alt="3" src="https://github.com/user-attachments/assets/a01b8442-0eee-466a-91b4-626560a222ef" />
<img width="241" height="428" alt="4" src="https://github.com/user-attachments/assets/21bf1b8a-5c45-4c41-a247-893d04d95aa3" />
