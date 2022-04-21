// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEMMbUJv5UV3F-H7TSzHQViJl4NH38PSc",
  authDomain: "react-blog-45d92.firebaseapp.com",
  projectId: "react-blog-45d92",
  storageBucket: "react-blog-45d92.appspot.com",
  messagingSenderId: "892917340291",
  appId: "1:892917340291:web:a19ca84a59f2c05c0523b6",
  measurementId: "G-9T0CR22PDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();