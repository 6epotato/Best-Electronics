// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnF9nEnt9nAVufpWwSMs4GfJ3qJ94aLOA",
  authDomain: "best-electronics-58258.firebaseapp.com",
  projectId: "best-electronics-58258",
  storageBucket: "best-electronics-58258.appspot.com",
  messagingSenderId: "175895333647",
  appId: "1:175895333647:web:8d49fe1d3490f89d528c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;