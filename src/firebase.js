// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { userHandle } from "utils";

const firebaseConfig = {
  apiKey: "AIzaSyAz5EdZbjt8EfRCvMdApr7qtJZtLdHpUU8",
  authDomain: "instagram-clone-1233c.firebaseapp.com",
  projectId: "instagram-clone-1233c",
  storageBucket: "instagram-clone-1233c.appspot.com",
  messagingSenderId: "350824176252",
  appId: "1:350824176252:web:1519a411c0cdcf043d07f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  console.log("çalıştı", user, auth);
  userHandle(user || false);
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};
