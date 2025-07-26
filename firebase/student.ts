// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCzqUlsHMryIW48ZULNNRjqCAWbaqu9sJc",
    authDomain: "ai-interview-e0261.firebaseapp.com",
    projectId: "ai-interview-e0261",
    storageBucket: "ai-interview-e0261.firebasestorage.app",
    messagingSenderId: "707467186884",
    appId: "1:707467186884:web:ab1a4f4be390a0c9bcaf91",
    measurementId: "G-HXT6M0Q27G"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);