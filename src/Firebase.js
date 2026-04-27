import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//
const firebaseConfig = {
  apiKey: "AIzaSyCNd-Bzb5LIUPuUXphCTuXrGFeH88y9Oig",
  authDomain: "meu-app-react-87726.firebaseapp.com",
  projectId: "meu-app-react-87726",
  storageBucket: "meu-app-react-87726.firebasestorage.app",
  messagingSenderId: "296085542049",
  appId: "1:296085542049:web:4c95ecbbd004174f30cce0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
