// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGq5-yQh7YB29m-k95zweq6vuBDstI2pM",
  authDomain: "otp-example-cce24.firebaseapp.com",
  projectId: "otp-example-cce24",
  storageBucket: "otp-example-cce24.appspot.com",
  messagingSenderId: "200230959079",
  appId: "1:200230959079:web:eea41a1297f4c94ba42f42",
  measurementId: "G-J2KLKDREKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);