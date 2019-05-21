import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCOh3X9GOMWb_sSXnUEv-l4Gfa_xgWyb5A",
  authDomain: "helpet-cbb92.firebase.com",
  databaseURL: "https://HelPet.firebaseio.com",
  storageBucket: "HelPet.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
