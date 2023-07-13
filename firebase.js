import { getFirestore, collection } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcVwn-tfsXeNfdxuMAYQgOPYE5AKt5O-g",
  authDomain: "notes-78fe6.firebaseapp.com",
  projectId: "notes-78fe6",
  storageBucket: "notes-78fe6.appspot.com",
  messagingSenderId: "436560516081",
  appId: "1:436560516081:web:1d1b5799ce86e3c76fea50"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
