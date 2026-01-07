import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE-QAEF8DND8WFmx_FIHJxMiA2pjllnk4",
  authDomain: "crwn-db-b4800.firebaseapp.com",
  projectId: "crwn-db-b4800",
  storageBucket: "crwn-db-b4800.firebasestorage.app",
  messagingSenderId: "526689556628",
  appId: "1:526689556628:web:ffa35a6609912e58febc81",
  measurementId: "G-4DSNE6QV2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Firestore
export const firestore = getFirestore(app);

// Create user profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, "users", userAuth.uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Google Sign In
export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider);
