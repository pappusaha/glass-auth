
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1oEmnoD1hJprD4PvTgz_eCtUtczGSTqw",
  authDomain: "glasses-authentication-4106f.firebaseapp.com",
  projectId: "glasses-authentication-4106f",
  storageBucket: "glasses-authentication-4106f.firebasestorage.app",
  messagingSenderId: "909711431228",
  appId: "1:909711431228:web:cade512e354a1941ad1539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth
