import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDDGsif7NejIt6Fd7O34vMRJ0CG9pf7Up0",
  authDomain: "whatsapp-react-clone-8acd1.firebaseapp.com",
  databaseURL: "https://whatsapp-react-clone-8acd1.firebaseio.com",
  projectId: "whatsapp-react-clone-8acd1",
  storageBucket: "whatsapp-react-clone-8acd1.appspot.com",
  messagingSenderId: "640378279499",
  appId: "1:640378279499:web:3315dc8574739ef4ab9fce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;