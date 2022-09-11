import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCLL0fCs3IX-utCSrTVgBWmCrReeJjVlAc",
  authDomain: "disneyhotstar-79eb1.firebaseapp.com",
  projectId: "disneyhotstar-79eb1",
  storageBucket: "disneyhotstar-79eb1.appspot.com",
  messagingSenderId: "386518396678",
  appId: "1:386518396678:web:14889b638bf1a582d8b887",
  measurementId: "G-RWY4Q14R3J",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { auth, storage, provider };
