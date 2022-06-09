import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE2WjO3ItmLlwqcOTZYsxHxbCiO4xBokE",
  authDomain: "blog-app-7d4ac.firebaseapp.com",
  projectId: "blog-app-7d4ac",
  storageBucket: "blog-app-7d4ac.appspot.com",
  messagingSenderId: "529401695962",
  appId: "1:529401695962:web:be740ba85c832b8d055fe3" 

 /*  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID  */
};

const app = initializeApp(firebaseConfig);

export default app
export const auth = getAuth()