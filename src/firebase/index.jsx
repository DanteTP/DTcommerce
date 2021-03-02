import firebase from 'firebase/app'
import '@firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDr7FEAnhZHLQgup2k3g3WBbUBeFll5GWo",
    authDomain: "dtcommerce-2399f.firebaseapp.com",
    projectId: "dtcommerce-2399f",
    storageBucket: "dtcommerce-2399f.appspot.com",
    messagingSenderId: "728614682863",
    appId: "1:728614682863:web:0700a0bc45001948029b1a",
    measurementId: "G-BNQ24EYZWW"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () =>{
      return app
  }

  export const getFirestore = () => {
      return firebase.firestore(app)
  }