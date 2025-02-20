import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPFL-7P69o5MRUGpV82MPif3x_VgHhsGU",
  authDomain: "netflixgpt-2345f.firebaseapp.com",
  projectId: "netflixgpt-2345f",
  storageBucket: "netflixgpt-2345f.firebasestorage.app",
  messagingSenderId: "971082147485",
  appId: "1:971082147485:web:33cfbdcb51a47b4aec5674",
  measurementId: "G-HMMNKELZS9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
