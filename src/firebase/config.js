import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvnhdEiJ8sGmmeoizoGNOwtTTdW5HgJ3g",
  authDomain: "base-firegram.firebaseapp.com",
  projectId: "base-firegram",
  storageBucket: "base-firegram.appspot.com",
  messagingSenderId: "992434235186",
  appId: "1:992434235186:web:8985ec7a438e9f0ece992b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
