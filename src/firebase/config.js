// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXPK9pzbdbDZtNGLujVGOxNG0KKjnhgb0",
  authDomain: "react-60062.firebaseapp.com",
  projectId: "react-60062",
  storageBucket: "react-60062.appspot.com",
  messagingSenderId: "1058398422037",
  appId: "1:1058398422037:web:9695dc69d435f99e123a1c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

