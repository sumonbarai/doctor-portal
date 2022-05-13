import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyA1k7chMDH527FZHQQTfl7lZhhSwrqM4bw",
  // authDomain: "doctor-portal-30952.firebaseapp.com",
  // projectId: "doctor-portal-30952",
  // storageBucket: "doctor-portal-30952.appspot.com",
  // messagingSenderId: "454768099311",
  // appId: "1:454768099311:web:e0bf84570f492276d7c01a",

  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
