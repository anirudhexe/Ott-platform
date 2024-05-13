// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import "firebase/compat/storage";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrEO6kNMhv4yllheRBfxXhqn_tU6ZZuLY",
  authDomain: "ott-platform-83e56.firebaseapp.com",
  projectId: "ott-platform-83e56",
  storageBucket: "ott-platform-83e56.appspot.com",
  messagingSenderId: "177419981633",
  appId: "1:177419981633:web:5d8137050926274f0ac7c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage=getStorage(app);
 export default storage;