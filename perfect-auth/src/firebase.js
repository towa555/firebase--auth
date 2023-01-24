// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3iTQRZIb3lKTMrfOSDe66sY5cyU5P1Y8",
  authDomain: "fir-auth-833c9.firebaseapp.com",
  projectId: "fir-auth-833c9",
  storageBucket: "fir-auth-833c9.appspot.com",
  messagingSenderId: "941253714554",
  appId: "1:941253714554:web:f1f76f59c0cf01c3bdd1c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;