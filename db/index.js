import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLScXSBiAzgOn_QZadEUrMwFEBf63m9F4",
    authDomain: "thebreakingbadquotes.firebaseapp.com",
    databaseURL: "https://thebreakingbadquotes.firebaseio.com",
    projectId: "thebreakingbadquotes",
    storageBucket: "thebreakingbadquotes.appspot.com",
    messagingSenderId: "741116442650"
  };
 // export const firebaseapp = firebase.firestore() 
const firebaseapp = firebase.initializeApp(config)
export default firebaseapp.firestore()