import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDvrfvYdIG8npdnKR8mc2TtcN6D3kS-ggg",
  authDomain: "slack-clone-vinicius.firebaseapp.com",
  projectId: "slack-clone-vinicius",
  storageBucket: "slack-clone-vinicius.appspot.com",
  messagingSenderId: "623056507000",
  appId: "1:623056507000:web:53c05aba7f161b316c9d8d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };