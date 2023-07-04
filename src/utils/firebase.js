// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCvt1G91H7lycP0hBOqs0NR4sADHjMHBOs",
  authDomain: "sandesh-65e1e.firebaseapp.com",
  projectId: "sandesh-65e1e",
  storageBucket: "sandesh-65e1e.appspot.com",
  messagingSenderId: "649713160877",
  appId: "1:649713160877:web:b32b2c6f78a306bd642c24"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider }
