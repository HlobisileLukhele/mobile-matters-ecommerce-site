import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD_89IShZAK2gwrIkymCru6A8nzuqNLcp8",
  authDomain: "mobile-matters-ecommerce-store.firebaseapp.com",
  projectId: "mobile-matters-ecommerce-store",
  storageBucket: "mobile-matters-ecommerce-store.appspot.com",
  messagingSenderId: "571872959737",
  appId: "1:571872959737:web:15fcd45dc4cc388cf51628",
  measurementId: "G-NMV671C9TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) =>{
        console.log(result);
    })
    .catch((error) =>{
        console.log(error);
    });
}