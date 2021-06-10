import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
     apiKey: "AIzaSyCHATVE4UgIYyaHghfo4rSafg10lH1h7Vk",
    authDomain: "algo-visualize.firebaseapp.com",
    projectId: "algo-visualize",
    storageBucket: "algo-visualize.appspot.com",
    messagingSenderId: "1063519860892",
    appId: "1:1063519860892:web:a09a0a7265a95f1daa1559"
});

var db = firebaseApp.firestore();

export { db };