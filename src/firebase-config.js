// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBznLkDmamvf2RLe6bBwXocBUj13YtxPdI",
  authDomain: "new-react-blog.firebaseapp.com",
  projectId: "new-react-blog",
  storageBucket: "new-react-blog.appspot.com",
  messagingSenderId: "630188842919",
  appId: "1:630188842919:web:ba8819861aab29aab82082",
  measurementId: "G-KNETC31L3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);