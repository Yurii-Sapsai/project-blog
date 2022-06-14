import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE2WjO3ItmLlwqcOTZYsxHxbCiO4xBokE",
  authDomain: "blog-app-7d4ac.firebaseapp.com",
  databaseURL: "https://blog-app-7d4ac-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-app-7d4ac",
  storageBucket: "blog-app-7d4ac.appspot.com",
  messagingSenderId: "529401695962",
  appId: "1:529401695962:web:be740ba85c832b8d055fe3" 
};

const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth();
