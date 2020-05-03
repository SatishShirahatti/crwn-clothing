
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;	