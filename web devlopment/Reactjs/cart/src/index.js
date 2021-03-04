import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCfWeS2611KRAyEvS9MVik9n-F6SgiYKvg",
    authDomain: "cart-50731.firebaseapp.com",
    projectId: "cart-50731",
    storageBucket: "cart-50731.appspot.com",
    messagingSenderId: "105713139241",
    appId: "1:105713139241:web:d5c62d46e9fa3a5e036638"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
