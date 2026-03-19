import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyD4Yq5QBh84yox8-yLS6mxqP3o0vpHQUb4",
  authDomain: "appfiis-ii.firebaseapp.com",
  projectId: "appfiis-ii",
  storageBucket: "appfiis-ii.firebasestorage.app",
  messagingSenderId: "735639659271",
  appId: "1:735639659271:web:14174f2a9acb9eefd95ba2",
  measurementId: "G-DC17FH54CE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { auth, db, googleProvider };
