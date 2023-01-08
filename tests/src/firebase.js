import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { ref, set, child, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const setData = (area, param) => {
  set(ref(db, area), param).catch((error) => {
    console.log('not ok' + error);
  });
};

export const getData = (area, callBack) => {
  const dbRef = ref(db);
  get(child(dbRef, area))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        callBack(data);
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      alert(error);
    });
};
