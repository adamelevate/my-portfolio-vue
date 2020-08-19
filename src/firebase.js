import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/functions";
// import "@firebase/auth";
// import "@firebase/storage";
import "@firebase/analytics";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqP-38WiK84v0KoOOrNc4_zPYzOdWZXGg",
  authDomain: "my-portfolio-adamelevate.firebaseapp.com",
  databaseURL: "https://my-portfolio-adamelevate.firebaseio.com",
  projectId: "my-portfolio-adamelevate",
  storageBucket: "my-portfolio-adamelevate.appspot.com",
  messagingSenderId: "383445249345",
  appId: "1:383445249345:web:118e3f86427aff1cb385c0",
  measurementId: "G-N2FW5LER72"
});

export const db = firebaseApp.firestore();
// export const firestorage = firebaseApp.storage();
// export const auth = firebaseApp.auth();
export const cloud = firebaseApp.functions();
export const analytics = firebaseApp.analytics();
