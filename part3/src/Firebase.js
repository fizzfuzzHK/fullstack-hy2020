import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCf7fLEtBux5ExOSfTRH-SX5TAnFwl-miw",
    authDomain: "fullstack-2020.firebaseapp.com",
    databaseURL: "https://fullstack-2020.firebaseio.com",
    projectId: "fullstack-2020",
    storageBucket: "fullstack-2020.appspot.com",
    messagingSenderId: "126906126366",
    appId: "1:126906126366:web:464f6eb58f8d294b6fde0f"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}