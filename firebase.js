// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8eGzaEGgXNxTB9CWroa9kp9T1RTfgwh8",
  authDomain: "farmers-app-f0a12.firebaseapp.com",
  projectId: "farmers-app-f0a12",
  storageBucket: "farmers-app-f0a12.appspot.com",
  messagingSenderId: "34133624323",
  appId: "1:34133624323:web:52ea7c3984a4524d7f3036",
  measurementId: "G-GNGSYSKZ16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);