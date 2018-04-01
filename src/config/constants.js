import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAqYRhB7l4Giq_pHtTwlXBFE5MpyUd2QY4',
  authDomain: 'quirk-18497.firebaseapp.com',
  databaseURL: 'https://quirk-18497.firebaseio.com/',
  storageBucket: 'quirk-18497.appspot.com',
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
