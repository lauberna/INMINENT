// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ty5SZXlpU-1M0z9S0_7jSZWcWLuUS4w",
  authDomain: "landinginm-64d70.firebaseapp.com",
  projectId: "landinginm-64d70",
  storageBucket: "landinginm-64d70.appspot.com",
  messagingSenderId: "706888491255",
  appId: "1:706888491255:web:f0ff9f752a55a2f1c4b3f2",
  measurementId: "G-ZD6SGLR9Y9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
