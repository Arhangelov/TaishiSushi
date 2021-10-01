import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA3M5Tk_-A58pcH-uAu4VXwp8i7HAWN8PY",
    authDomain: "taishi-sushi-36b89.firebaseapp.com",
    projectId: "taishi-sushi-36b89",
    storageBucket: "taishi-sushi-36b89.appspot.com",
    messagingSenderId: "989069783259",
    appId: "1:989069783259:web:67b85f0b55880eb1585cfe"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();