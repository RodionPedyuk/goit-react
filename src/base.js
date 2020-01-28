import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBxv2u1kG26VXlKz1ZS8p7OqZZQc76MOn8',
  authDomain: 'auth-4f5fe.firebaseapp.com',
  databaseURL: 'https://auth-4f5fe.firebaseio.com',
  projectId: 'auth-4f5fe',
  storageBucket: 'auth-4f5fe.appspot.com',
  messagingSenderId: '186090215212',
  appId: '1:186090215212:web:eece9c38c05ccac4873e89',
  measurementId: 'G-SSMPVWYPTL',
});

export default app;
