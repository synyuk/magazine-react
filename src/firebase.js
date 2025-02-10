import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAabRCnuw4NaFoDlzGoN1QssPaLLkosWKM",
    authDomain: "magazine-cbs.firebaseapp.com",
    databaseURL: "https://magazine-cbs-default-rtdb.firebaseio.com/",
    projectId: "magazine-cbs",
    storageBucket: "magazine-cbs.firebasestorage.app",
    messagingSenderId: "727621848913",
    appId: "1:727621848913:web:6e6873b7c47a0687518d70",
    measurementId: "G-7YB5N7636T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };

