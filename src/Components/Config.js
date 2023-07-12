// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBwiV8A7It_VGAr0O1OhRUkr7-kZ5P2Fs4",
  authDomain: "listed-5dffb.firebaseapp.com",
  projectId: "listed-5dffb",
  storageBucket: "listed-5dffb.appspot.com",
  messagingSenderId: "61360253189",
  appId: "1:61360253189:web:b918959900439f82ceef6c",
  measurementId: "G-0YEBP93YG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


export {auth,provider};