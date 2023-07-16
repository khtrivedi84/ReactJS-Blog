import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrSUeQ4OqkteDtzS5kkolbQ0J5BgTtLRY",
  authDomain: "my-react-blog-67fd8.firebaseapp.com",
  projectId: "my-react-blog-67fd8",
  storageBucket: "my-react-blog-67fd8.appspot.com",
  messagingSenderId: "95814871429",
  appId: "1:95814871429:web:3b1507a45304334e13bcec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
