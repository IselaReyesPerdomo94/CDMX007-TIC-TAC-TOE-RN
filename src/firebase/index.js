import * as firebase from "firebase/app";
import "firebase/firestore";
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env)

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}

export const firebaseApp = firebase.initializeApp(config);
export const db = firebase.firestore();