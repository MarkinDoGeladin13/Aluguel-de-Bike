import firebase from "firebase";
require ("@firebase/firestore");
  const firebaseConfig = {
    apiKey: "AIzaSyDJ5c6x42TPtT0T0tyT2nQ2M-Izri03YeI",
    authDomain: "aluguel-de-bike-ta-caro-dimaiz.firebaseapp.com",
    projectId: "aluguel-de-bike-ta-caro-dimaiz",
    storageBucket: "aluguel-de-bike-ta-caro-dimaiz.appspot.com",
    messagingSenderId: "669942572096",
    appId: "1:669942572096:web:522cdeb32386683423aba5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default firebase.firestore();










