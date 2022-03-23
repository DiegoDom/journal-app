import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmOeH4eRhpcCj-YXGXpguk1cTIUf4VgJ8",
    authDomain: "react-app-cursos-b576a.firebaseapp.com",
    projectId: "react-app-cursos-b576a",
    storageBucket: "react-app-cursos-b576a.appspot.com",
    messagingSenderId: "802739890826",
    appId: "1:802739890826:web:05dad1e859b5cb7e2f5b73"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};