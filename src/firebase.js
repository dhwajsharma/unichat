import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB3QZODfgW3Gsw2x5kS0gk27_XcPQ0QHFQ",
    authDomain: "unichat-react.firebaseapp.com",
    projectId: "unichat-react",
    storageBucket: "unichat-react.appspot.com",
    messagingSenderId: "932857418118",
    appId: "1:932857418118:web:64d8aea5600a40735f1c07",
  })
  .auth();
