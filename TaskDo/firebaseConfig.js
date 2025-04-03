// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your Firebase project config
const firebaseConfig = {
    apiKey: "AIzaSyA0Iy1wgk0GWGnq4MXHmPxK6NCvX5IVeRA",
    authDomain: "taskdo-80d8d.firebaseapp.com",
    projectId: "taskdo-80d8d",
    storageBucket: "taskdo-80d8d.firebasestorage.app",
    messagingSenderId: "880610519936",
    appId: "1:880610519936:web:5e3d3819ad962c39e66f65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };