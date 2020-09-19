import firebase from 'firebase';

var DB_CONFIG = {
  apiKey: "AIzaSyD_C4jkdDN4zg630D8u4SKQdhqzdly5S1o",
  authDomain: "sociallogin-dddb3.firebaseapp.com",
  databaseURL: "https://sociallogin-dddb3.firebaseio.com",
  projectId: "sociallogin-dddb3",
  storageBucket: "sociallogin-dddb3.appspot.com",
  messagingSenderId: "214513163839",
  appId: "1:214513163839:web:af1f00b6ce1f8480fea28a",
  measurementId: "G-62HNZSHFCK"
};

firebase.initializeApp(DB_CONFIG);


export default firebase;