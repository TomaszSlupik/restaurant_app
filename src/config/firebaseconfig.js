import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAr-fsGAPfCsDNX727rTyBQusa38Ui5WiE",
    authDomain: "restaurantreact-c8bb4.firebaseapp.com",
    databaseURL: "https://restaurantreact-c8bb4-default-rtdb.firebaseio.com",
    projectId: "restaurantreact-c8bb4",
    storageBucket: "restaurantreact-c8bb4.appspot.com",
    messagingSenderId: "314822966440",
    appId: "1:314822966440:web:0f0abb10666a19fcae569d"
  };
  
  const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)