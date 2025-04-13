// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOnI-YflaP4nslHIt1ZwNdYCMm3it5wQA",
  authDomain: "netflixgpt-1210f.firebaseapp.com",
  projectId: "netflixgpt-1210f",
  storageBucket: "netflixgpt-1210f.firebasestorage.app",
  messagingSenderId: "528157353387",
  appId: "1:528157353387:web:5ee558c120ffcb0db65eee",
  measurementId: "G-12P5EPEFZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();