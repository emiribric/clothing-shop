import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDtKCW8AOnZdmarov43CJS8iC8VeLyc7fY",
    authDomain: "clothing-shop-ra.firebaseapp.com",
    projectId: "clothing-shop-ra",
    storageBucket: "clothing-shop-ra.appspot.com",
    messagingSenderId: "477696509790",
    appId: "1:477696509790:web:3ac3a312aa160c7a9b31cf",
    measurementId: "G-SFHCBBYMPN"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const shapShot = await userRef.get();

    //console.log(shapShot);

    if(!shapShot.exists) {
        const { displayName, email } = userAuth;
        const ceatedAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                ceatedAt,
                ...additionalData
            })
        } catch(error) {
            console.log('Error creating user!', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;