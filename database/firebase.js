import firebase from "firebase";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDjvnR2TUxE8WC1vH_572GwaX09Yb2PUYU",
    authDomain: "sm42-c3899.firebaseapp.com",
    databaseURL: "https://sm42-c3899.firebaseio.com",
    projectId: "sm42-c3899",
    storageBucket: "sm42-c3899.appspot.com",
    messagingSenderId: "195405043362",
    appId: "1:195405043362:web:71242bd785d250dbac29fb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
  firebase,
  db
};
