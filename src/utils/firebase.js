// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ZB87JJnnZEh0_-EpWHzati08ysqd3Ss",
  authDomain: "netflixgpt-a9469.firebaseapp.com",
  projectId: "netflixgpt-a9469",
  storageBucket: "netflixgpt-a9469.firebasestorage.app",
  messagingSenderId: "95869015695",
  appId: "1:95869015695:web:1dcf03feb75ea2623002fa",
  measurementId: "G-BK2B3FYLN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();