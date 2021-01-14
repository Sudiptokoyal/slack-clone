import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_AG8UlPQ_UKW73vRHQRpZOVD4li97BVQ",
    authDomain: "slack-clone-cb51b.firebaseapp.com",
    databaseURL: "https://slack-clone-cb51b-default-rtdb.firebaseio.com",
    projectId: "slack-clone-cb51b",
    storageBucket: "slack-clone-cb51b.appspot.com",
    messagingSenderId: "776423775356",
    appId: "1:776423775356:web:eba5d0b9dc1a53d6cabdf9",
    measurementId: "G-8QMGSE2YK9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
// create db
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db; 