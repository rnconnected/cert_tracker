import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVUoPRlyPhdP93YPHcIVIz8imvIOe2J4Q",
  authDomain: "certtracker-bc84c.firebaseapp.com",
  projectId: "certtracker-bc84c",
  storageBucket: "certtracker-bc84c.appspot.com",
  messagingSenderId: "838254535299",
  appId: "1:838254535299:web:dcef85a15fb8aade0d71b6",
  measurementId: "G-QDV8HRP665",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
