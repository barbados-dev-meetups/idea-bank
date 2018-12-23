import * as firebase from "firebase";

// import { FirebaseConfig } from "../config/keys";
firebase.initializeApp({
  apiKey: "AIzaSyDWeK0ptLg6Uqv2WYcxpsknGZxFqpIhjww",
    authDomain: "idea-bank-49f6d.firebaseapp.com",
    databaseURL: "https://idea-bank-49f6d.firebaseio.com",
    projectId: "idea-bank-49f6d",
    storageBucket: "idea-bank-49f6d.appspot.com",
    messagingSenderId: "630304874774"
});

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
