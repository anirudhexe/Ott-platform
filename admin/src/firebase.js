// Import the functions you need from the SDKs you need
import {firebase} from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrEO6kNMhv4yllheRBfxXhqn_tU6ZZuLY",
  authDomain: "ott-platform-83e56.firebaseapp.com",
  projectId: "ott-platform-83e56",
  storageBucket: "ott-platform-83e56.appspot.com",
  messagingSenderId: "177419981633",
  appId: "1:177419981633:web:cc058dcbde4653ee0ac7c0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage=firebase.storage();
export default storage;