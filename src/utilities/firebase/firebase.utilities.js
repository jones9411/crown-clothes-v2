import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHyZVO78-EYbfRhpCS9pEbnpowLDWJhSA",
  authDomain: "crwn-clothing-ztm-f9ff9.firebaseapp.com",
  projectId: "crwn-clothing-ztm-f9ff9",
  storageBucket: "crwn-clothing-ztm-f9ff9.appspot.com",
  messagingSenderId: "531207403515",
  appId: "1:531207403515:web:8fe444cd2a7781f36e7d5e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
