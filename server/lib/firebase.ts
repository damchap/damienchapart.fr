import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//your firebase configuration goes here
//https://firebase.google.com/docs/web/learn-more?authuser=0&hl=en#modular-version
const firebaseConfig = {
    apiKey: "AIzaSyDznUvQg0GFcm2enXnLtqI1xUBRxDgGiLI",
    authDomain: "damienchapart-portfolio.firebaseapp.com",
    projectId: "damienchapart-portfolio",
    storageBucket: "damienchapart-portfolio.appspot.com",
    messagingSenderId: "399404818162",
    appId: "1:399404818162:web:53c9138c099a18635dba6b",
    measurementId: "G-K4GMX9NLG6"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);
