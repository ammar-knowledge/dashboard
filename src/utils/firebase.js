// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv0nYNa-oUkN_jJODZ5MFfXPRiHV8NXLA",
  authDomain: "brainlab-develop.firebaseapp.com",
  projectId: "brainlab-develop",
  storageBucket: "brainlab-develop.appspot.com",
  messagingSenderId: "518016133394",
  appId: "1:518016133394:web:bac719f875604af4acabcb",
  measurementId: "G-CFWLNDXLWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);