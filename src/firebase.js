/** @format */

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider();

const firebaseConfig = {
	apiKey: 'AIzaSyCPwfNSFvr71H_0MdI-DIvUk5FWRSDsP5w',
	authDomain: 'hackathon-e509e.firebaseapp.com',
	projectId: 'hackathon-e509e',
	storageBucket: 'hackathon-e509e.appspot.com',
	messagingSenderId: '265966027597',
	appId: '1:265966027597:web:6bb471aa9cc86a72596d04',
	measurementId: 'G-5YL234HZRE',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const googleSignIn = async () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
		})

		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
};
