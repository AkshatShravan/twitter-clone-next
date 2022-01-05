// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOzrlNVYFBdn4ZycFy63yUqcomLD5qAhc",
    authDomain: "twitter-clone-2-7a878.firebaseapp.com",
    projectId: "twitter-clone-2-7a878",
    storageBucket: "twitter-clone-2-7a878.appspot.com",
    messagingSenderId: "707335709822",
    appId: "1:707335709822:web:2b7facc01e4d530bce242f",
    measurementId: "G-853XQPZKMW"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };