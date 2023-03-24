import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { UserType } from './types';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

// initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize cloud firestore and get a reference to the service
const db = getFirestore(app);

export const api = {
    gPopup: async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        try {
            // The signed-in user info.
            const response = await signInWithPopup(auth, provider);
            return response;
        } catch(error) {
            // Handle Errors here.
            alert(`Erro ao fazer login:\n${(error as Error).message}`);
        }
    }
}