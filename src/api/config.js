import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjO-Giy0LU1umKax_2HrYS46bRCjNOgPI",
  authDomain: "gameflix-3ccf6.firebaseapp.com",
  projectId: "gameflix-3ccf6",
  storageBucket: "gameflix-3ccf6.appspot.com",
  messagingSenderId: "378501729718",
  appId: "1:378501729718:web:19f7a4707f304cb1708517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore
export const db = getFirestore(app);