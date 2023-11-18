// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAV8U0DzkRqqd0aMp8BhKIjPo6taCDu2p4',
  authDomain: 'stufb-e00cc.firebaseapp.com',
  projectId: 'stufb-e00cc',
  storageBucket: 'stufb-e00cc.appspot.com',
  messagingSenderId: '358739303550',
  appId: '1:358739303550:web:7ff52aa211a90a68084c2f',
  measurementId: 'G-G831HDS5VZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
