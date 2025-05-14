import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-99_MelK91zy5VFEV05EmnJFuwrhZ1s8",
  authDomain: "eienw-bc.firebaseapp.com",
  projectId: "eienw-bc",
  storageBucket: "eienw-bc.firebasestorage.app",
  messagingSenderId: "107024292285",
  appId: "1:107024292285:web:00c35e5e0142f224435ad4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };