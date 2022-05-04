// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDacX8Q7nIc_jqAIQ8RlFGYQjERQAfADas",
    authDomain: "best-electronics-50991.firebaseapp.com",
    projectId: "best-electronics-50991",
    storageBucket: "best-electronics-50991.appspot.com",
    messagingSenderId: "115679188080",
    appId: "1:115679188080:web:b801bbd6abaf39f46d50b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;