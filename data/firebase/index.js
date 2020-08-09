import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAgLSX8ewZ2D2JtJzNflpQMMzgMpfGo5Os",
  authDomain: "my-portfolio-c6a5a.firebaseapp.com",
  databaseURL: "https://my-portfolio-c6a5a.firebaseio.com",
  projectId: "my-portfolio-c6a5a",
  storageBucket: "my-portfolio-c6a5a.appspot.com",
  messagingSenderId: "797495667213",
  appId: "1:797495667213:web:0cc251c2b50af620c84344",
  measurementId: "G-LVBHK4C50F",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

// Get the download URL
const storage = firebase.storage();

export { firebase, storage };
