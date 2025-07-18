let map;
let marker;

function initMap() {
    const defaultPos = { lat: 28.6139, lng: 77.2090 }; // Default location (Delhi)
    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultPos,
        zoom: 12,
    });
    marker = new google.maps.Marker({
        position: defaultPos,
        map: map,
        title: "Vehicle Location",
    });
}

function updateMarker(lat, lng) {
    const newPos = { lat: lat, lng: lng };
    marker.setPosition(newPos);
    map.setCenter(newPos);
}

// Firebase Realtime Listener
const firebaseConfig = {
    apiKey: "AIzaSyDUMMY-KEY-1234567890abcdefg",
    authDomain: "local-lift-tracker.firebaseapp.com",
    databaseURL: "https://local-lift-tracker.firebaseio.com",
    projectId: "local-lift-tracker",
    storageBucket: "local-lift-tracker.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
};

firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref("vehicle_location");

dbRef.on("value", (snapshot) => {
    const data = snapshot.val();
    if (data && data.lat && data.lng) {
        updateMarker(data.lat, data.lng);
    }
});

window.onload = initMap;