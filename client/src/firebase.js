// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d8157.firebaseapp.com",
  projectId: "mern-estate-d8157",
  storageBucket: "mern-estate-d8157.appspot.com",
  messagingSenderId: "107977869411",
  appId: "1:107977869411:web:a94443688280ff75375056"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);