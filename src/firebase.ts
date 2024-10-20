// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@react-native-firebase/firestore"; // Import Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIEWEiRaaQGJIhRxgV8trPKDYbEhcAZjg",
  authDomain: "vitalink-33a26.firebaseapp.com",
  projectId: "vitalink-33a26",
  storageBucket: "vitalink-33a26.appspot.com",
  messagingSenderId: "843755229976",
  appId: "1:843755229976:web:0b981747f14c03bcf3046d",
  measurementId: "G-0TRB5JNZM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to Firestore
const db = getFirestore(); // Use the firestore() function from the package

export default db; // Export the Firestore instance