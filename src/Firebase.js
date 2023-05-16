// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw2EctDWINKU7saJ_5VODcEjIuKJ70sz8",
  authDomain: "labtica-test.firebaseapp.com",
  projectId: "labtica-test",
  storageBucket: "labtica-test.appspot.com",
  messagingSenderId: "377467708052",
  appId: "1:377467708052:web:367880a8025d2c73418a81",
  measurementId: "G-4P0JYZP054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
