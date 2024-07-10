import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHUw0-areYv5Xg4u2mfeUe7WH5YpxK-o0",
  authDomain: "meet-22b8a.firebaseapp.com",
  projectId: "meet-22b8a",
  storageBucket: "meet-22b8a.appspot.com",
  messagingSenderId: "61161453715",
  appId: "1:61161453715:web:c38d4695643489e20db566",
  measurementId: "G-N317W188XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");

