import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDb9YDSDNrLoFbPu8wsPpgiejXQ12fVpK8",
  authDomain: "web-netflix-19f1c.firebaseapp.com",
  projectId: "web-netflix-19f1c",
  storageBucket: "web-netflix-19f1c.appspot.com",
  messagingSenderId: "114851273846",
  appId: "1:114851273846:web:2d9d29d75e8a7f43ef1357",
  measurementId: "G-11D44G824T",
};

const firebaseAPP = firebase.initializeApp(firebaseConfig);
const db = firebaseAPP.firestore();
const auth = firebase.auth();

export {auth}
export default db;
