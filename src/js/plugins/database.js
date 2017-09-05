import * as firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAuvToNdPMvGk4OKBAYDrruyK04rpg-zEg',
  authDomain: 'github-notes-79ee0.firebaseapp.com',
  databaseURL: 'https://github-notes-79ee0.firebaseio.com',
  projectId: 'github-notes-79ee0',
  storageBucket: 'github-notes-79ee0.appspot.com',
  messagingSenderId: '829320344393',
};

const connection = firebase.initializeApp(config);
const db = connection.database();

export default db;
