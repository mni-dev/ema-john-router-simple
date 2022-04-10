// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpWqpqthbzYtD5BDtGpwf2qNnAUTKVhIE",
  authDomain: "ema-john-router-a754e.firebaseapp.com",
  projectId: "ema-john-router-a754e",
  storageBucket: "ema-john-router-a754e.appspot.com",
  messagingSenderId: "795194328822",
  appId: "1:795194328822:web:67d353bb67e10bb0860ed7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
export default auth;