/** @format */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCPwfNSFvr71H_0MdI-DIvUk5FWRSDsP5w',
	authDomain: 'hackathon-e509e.firebaseapp.com',
	projectId: 'hackathon-e509e',
	storageBucket: 'hackathon-e509e.appspot.com',
	messagingSenderId: '265966027597',
	appId: '1:265966027597:web:6bb471aa9cc86a72596d04',
	measurementId: 'G-5YL234HZRE',
};

// export const googleSignIn = async () => {
// 	signInWithPopup(auth, provider)
// 		.then((result) => {
// 			const credential = GoogleAuthProvider.credentialFromResult(result);
// 			const token = credential.accessToken;
// 			const user = result.user;
// 			console.log(token, user);
// 		})
// 		.catch((error) => {
// 			// Handle Errors here.
// 			const errorCode = error.code;
// 			const errorMessage = error.message;
// 			// The email of the user's account used.
// 			const email = error.customData.email;
// 			// The AuthCredential type that was used.
// 			const credential = GoogleAuthProvider.credentialFromError(error);
// 			// ...
// 		});
// };

const init = () => {
	if (!firebase.apps.length) {
		return firebase.initializeApp(firebaseConfig);
	} else {
		return firebase.app();
	}
};
const firebaseApp = init();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const provider = new firebase.auth.GoogleAuthProvider();
const storage = new firebase.storage();

export { init, db, provider, storage };
