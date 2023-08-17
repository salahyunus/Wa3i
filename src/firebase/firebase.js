import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5DhQUb_PDOJErmtHfdXvPS2BuuH3XMU8",
  authDomain: "filmz-bd287.firebaseapp.com",
  projectId: "filmz-bd287",
  storageBucket: "filmz-bd287.appspot.com",
  messagingSenderId: "333724245627",
  appId: "1:333724245627:web:ee0da8c1e69035c3620cde",
  measurementId: "G-C1129QC26D",
};
// APP
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firestore to save data to backend
const db = firebaseApp.firestore();
// Authentication
const auth = firebase.auth();
// Google Provider
const provider = new firebase.auth.GoogleAuthProvider();
// Storage
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
