import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBMCfxzR61tWlBwyEANnn8RkOQ1ad04m4g",
    authDomain: "clone-e4f4a.firebaseapp.com",
    projectId: "clone-e4f4a",
    storageBucket: "clone-e4f4a.appspot.com",
    messagingSenderId: "1079599409377",
    appId: "1:1079599409377:web:640687ad953aa3af6cefa0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db,auth}