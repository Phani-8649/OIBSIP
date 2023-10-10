import firebase from 'firebase/app';
import 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0iwfLwUtSO-xRc9LwiAN-OgT1qu0pxqI",
  authDomain: "homam-fdee4.firebaseapp.com",
  projectId: "homam-fdee4",
  storageBucket: "homam-fdee4.appspot.com",
  messagingSenderId: "802461249533",
  appId: "1:802461249533:web:495aead1905f5f4064b394",
  measurementId: "G-EETX8E0HRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
export const auth = getAuth(app);
export default firebaseConfig;