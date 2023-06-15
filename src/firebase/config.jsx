import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRmEfNr15m3IganyJHHwmVLh658s2CNUk",
  authDomain: "proyecto-yesenia-ef7e9.firebaseapp.com",
  projectId: "proyecto-yesenia-ef7e9",
  storageBucket: "proyecto-yesenia-ef7e9.appspot.com",
  messagingSenderId: "506812271247",
  appId: "1:506812271247:web:f130c94d55175be4483efa",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
