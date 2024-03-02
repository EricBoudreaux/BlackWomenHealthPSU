
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC1iQaFVNyd0H9TQiMLMuQimivNHo0IZlA",
  authDomain: "blackwomenhealthpsu-2f98c.firebaseapp.com",
  projectId: "blackwomenhealthpsu-2f98c",
  storageBucket: "blackwomenhealthpsu-2f98c.appspot.com",
  messagingSenderId: "104961350506",
  appId: "1:104961350506:web:d4f3de29d0e7da10956313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);