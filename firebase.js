// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmR-YOt4NbRwQVCxNg1QuAEZfU8Mi-IbE",
  authDomain: "pantry-tracker-9a3b2.firebaseapp.com",
  projectId: "pantry-tracker-9a3b2",
  storageBucket: "pantry-tracker-9a3b2.appspot.com",
  messagingSenderId: "218436505031",
  appId: "1:218436505031:web:541c2cc18138d7548f1de2",
  measurementId: "G-MX8LDBZ4FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);