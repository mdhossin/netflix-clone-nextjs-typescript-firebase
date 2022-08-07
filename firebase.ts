// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKFejGnFfz8EkbCm4FxlepBztqmx3Fya8",
  authDomain: "netflix-clone-b8797.firebaseapp.com",
  projectId: "netflix-clone-b8797",
  storageBucket: "netflix-clone-b8797.appspot.com",
  messagingSenderId: "594769232624",
  appId: "1:594769232624:web:a4262c6227d968a6caf835",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
