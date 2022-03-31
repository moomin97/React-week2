// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgLnHJbfqP7ptEhPOVdqCSpnel7V1wjxU",
  authDomain: "week2-react-basic.firebaseapp.com",
  projectId: "week2-react-basic",
  storageBucket: "week2-react-basic.appspot.com",
  messagingSenderId: "923110940991",
  appId: "1:923110940991:web:3aef4b88b7d6d2cb5bf38a",
  measurementId: "G-X6R0EJVDN2"
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore();