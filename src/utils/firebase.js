// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPFL-7P69o5MRUGpV82MPif3x_VgHhsGU",
  authDomain: "netflixgpt-2345f.firebaseapp.com",
  projectId: "netflixgpt-2345f",
  storageBucket: "netflixgpt-2345f.appspot.com",
  messagingSenderId: "971082147485",
  appId: "1:971082147485:web:33cfbdcb51a47b4aec5674",
  measurementId: "G-HMMNKELZS9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
