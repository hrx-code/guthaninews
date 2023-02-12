import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD1t4YBNVU_MzsdxIaFHBE6jwzEnnG8Z_c",
    authDomain: "fir-tut-48241.firebaseapp.com",
    projectId: "fir-tut-48241",
    storageBucket: "fir-tut-48241.appspot.com",
    messagingSenderId: "450989663629",
    appId: "1:450989663629:web:ff0b9cbb06ad2942ee49c4",
    measurementId: "G-VXDD7JSFET"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;