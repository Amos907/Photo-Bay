import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBGv6lgKopAIAEBCd5xsbEZyCbbUlxVuYs",
  authDomain: "photo-bay-364a8.firebaseapp.com",
  projectId: "photo-bay-364a8",
  storageBucket: "photo-bay-364a8.appspot.com",
  messagingSenderId: "381545453163",
  appId: "1:381545453163:web:c063d1ec52c2265d82032e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };