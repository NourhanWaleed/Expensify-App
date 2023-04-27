import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
const config = {
  apiKey: "AIzaSyAKVZiF9hmtp3RWsWWRU2Da8mTDDyf9t80",
  authDomain: "expensify-60b11.firebaseapp.com",
  databaseURL: "https://expensify-60b11-default-rtdb.firebaseio.com",
  projectId: "expensify-60b11",
  storageBucket: "expensify-60b11.appspot.com",
  messagingSenderId: "941177184585",
  appId: "1:941177184585:web:96dc8124607973f9717a98",
  measurementId: "G-G4N74G88T0"
};


const app = initializeApp(config);

const database = firebase.database();

export { firebase, database as default};