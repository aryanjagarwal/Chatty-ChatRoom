// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM0XYAfobhy08X8n46lh_ggg5oqLJaXm4",
  authDomain: "chatty-3dd0f.firebaseapp.com",
  projectId: "chatty-3dd0f",
  storageBucket: "chatty-3dd0f.appspot.com",
  messagingSenderId: "559558660306",
  appId: "1:559558660306:web:da0ab1e2ee3746db8c9d0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);