import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6W2BiLRbvFcbj_jgsCWgja6dQmXR6DDM",
    authDomain: "web-store-38436.firebaseapp.com",
    databaseURL: "https://web-store-38436.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;