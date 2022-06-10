// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzeN-pK9Xizb-3BiwzAvhAwJ-bpPrFoqg",
  authDomain: "spotifyclone-uzowis.firebaseapp.com",
  projectId: "spotifyclone-uzowis",
  storageBucket: "spotifyclone-uzowis.appspot.com",
  messagingSenderId: "477797689179",
  appId: "1:477797689179:web:bf66ba2958c2a42079dc7e",
  measurementId: "G-ZJJBXZ0YPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);