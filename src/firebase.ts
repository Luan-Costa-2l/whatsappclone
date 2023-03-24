import { initializeApp } from 'firebase/app';
import { collection, doc, getDocs, getFirestore, query, queryEqual, setDoc, where } from 'firebase/firestore';
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

// initialize firebase authentication
const auth = getAuth(app);

export const api = {
    gPopup: async () => {
        const provider = new GoogleAuthProvider();
        try {
            // The signed-in user info.
            const response = await signInWithPopup(auth, provider);
            return response;
        } catch(error) {
            // Handle Errors here.
            alert(`Erro ao fazer login:\n${(error as Error).message}`);
        }
    },
    addUser: async (user: UserType) => {
        await setDoc(doc(db, 'users', user.id), user, {merge: true});
    },
    getContactList: async (userId: string) => {
        let list: UserType[] = [];
        const q = query(collection(db, 'users'), where('id', '!=', userId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((user) => {
            list.push(user.data() as UserType);
        })
        return list;
    }
}