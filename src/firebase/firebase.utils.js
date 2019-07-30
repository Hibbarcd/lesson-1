import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var Config = {
  apiKey: "AIzaSyDc7wckscWh-p96PGm3RZz6b6FgLqykBK8",
  authDomain: "yeoldemarketdb.firebaseapp.com",
  databaseURL: "https://yeoldemarketdb.firebaseio.com",
  projectId: "yeoldemarketdb",
  storageBucket: "",
  messagingSenderId: "543241214962",
  appId: "1:543241214962:web:80399c77b16f783d"
};
// Initialize Firebase
firebase.initializeApp(Config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase