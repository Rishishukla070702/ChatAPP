
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHfoF2eQ60pcywswF7GRyL1emipaS-y4o",
  authDomain: "firechat-5013f.firebaseapp.com",
  projectId: "firechat-5013f",
  storageBucket: "firechat-5013f.appspot.com",
  messagingSenderId: "28640274125",
  appId: "1:28640274125:web:1cd8f357f4c3fb99646b84",
  measurementId: "G-5KT5JCKB7D"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth,db}