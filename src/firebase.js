import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQwHtVkxNOGbbpozwPzasrbI8Oue95AZI",
  authDomain: "phone-auth-react-d4712.firebaseapp.com",
  projectId: "phone-auth-react-d4712",
  storageBucket: "phone-auth-react-d4712.appspot.com",
  messagingSenderId: "821555350333",
  appId: "1:821555350333:web:057b68b3379ab21b8a9354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
