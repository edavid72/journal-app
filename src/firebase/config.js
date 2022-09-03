// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAaXNIy-OBulTkLCpbp4-Gj-d10Dyv1BZE',
  authDomain: 'journal-redux-8830e.firebaseapp.com',
  projectId: 'journal-redux-8830e',
  storageBucket: 'journal-redux-8830e.appspot.com',
  messagingSenderId: '454302706483',
  appId: '1:454302706483:web:386853cdf5edc35b892c46',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Authentication modules
export const firebaseAuth = getAuth(firebaseApp);

// Data Base's modules
export const firebaseDB = getFirestore(firebaseApp);
