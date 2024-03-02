
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAmRj8_J-Bf6Ri3e_a39WkI876a1CrxVkU",
  authDomain: "blackwomenhealthpsu.firebaseapp.com",
  projectId: "blackwomenhealthpsu",
  storageBucket: "blackwomenhealthpsu.appspot.com",
  messagingSenderId: "575114311450",
  appId: "1:575114311450:web:aecb871698f99000405ea3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);