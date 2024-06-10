import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5F4XVJsEFbGMQT3u7ZZVVZtJjp3OId9E",
  authDomain: "ultimatenetflix-ac077.firebaseapp.com",
  projectId: "ultimatenetflix-ac077",
  storageBucket: "ultimatenetflix-ac077.appspot.com",
  messagingSenderId: "570742409925",
  appId: "1:570742409925:web:ab66a7ef04b2dde038feac",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
