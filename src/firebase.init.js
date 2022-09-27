// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUrFTIwHTD-3jLfLR891S66GEPLUbDOgs",
  authDomain: "simple-dashboard-c6d6e.firebaseapp.com",
  projectId: "simple-dashboard-c6d6e",
  storageBucket: "simple-dashboard-c6d6e.appspot.com",
  messagingSenderId: "386354554694",
  appId: "1:386354554694:web:7e5838c51fda52139da747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;