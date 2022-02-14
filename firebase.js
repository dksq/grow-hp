// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKNmFWftLPL2_7V8aXC2OGwE_Bz_5vB4o",
  authDomain: "grow-hp-67b81.firebaseapp.com",
  projectId: "grow-hp-67b81",
  storageBucket: "grow-hp-67b81.appspot.com",
  messagingSenderId: "633344272001",
  appId: "1:633344272001:web:4edd9969e9b40d7fa50f80",
  measurementId: "G-QY2FG2SH5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
