import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDJh1nzRhJAm-ZXK5Cto8yyQV1FvQrQ9Ck",
	authDomain: "crwn-db-65e24.firebaseapp.com",
	databaseURL: "https://crwn-db-65e24.firebaseio.com",
	projectId: "crwn-db-65e24",
	storageBucket: "crwn-db-65e24.appspot.com",
	messagingSenderId: "1009409409950",
	appId: "1:1009409409950:web:90626d42a486fd14bd8c8f",
	measurementId: "G-P4YFKGTGR4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;	