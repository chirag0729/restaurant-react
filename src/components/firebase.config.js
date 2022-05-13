import {getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDCHuSwlc4Xu_kBBNyVA1KmCv4ozOS3__M",
    authDomain: "restaurantapp-c68cb.firebaseapp.com",
    databaseURL: "https://restaurantapp-c68cb-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-c68cb",
    storageBucket: "restaurantapp-c68cb.appspot.com",
    messagingSenderId: "617073154299",
    appId: "1:617073154299:web:1ceb3cb86e33b54da4b85e"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage }