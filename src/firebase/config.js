// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdcFMeG3fjZmt_r1ahNa6e0Y0o4oYxuh0",
  authDomain: "finance-9b58b.firebaseapp.com",
  projectId: "finance-9b58b",
  storageBucket: "finance-9b58b.firebasestorage.app",
  messagingSenderId: "725197214128",
  appId: "1:725197214128:web:cba03df6ee7110257ac675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()