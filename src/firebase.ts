import { initializeApp } from 'firebase/app';
import { arrayUnion, collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { ChatType, MessageType, UserType } from './types';

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
    },
    addNewChat: async (user: UserType, user2: UserType) => {
        const newChatRef = doc(collection(db, 'chats'));
        await setDoc(newChatRef, {
            messages: [],
            users: [user.id, user2.id],
            chatId: newChatRef.id
        });

        await Promise.all([
            updateDoc(doc(db, 'users', user.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    title: user2.name,
                    image: user2.avatar,
                    with: user2.id
                })
            }),
            updateDoc(doc(db, 'users', user2.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    title: user.name,
                    image: user.avatar,
                    with: user.id
                })
            })
        ]);
    },
    onChatList: (userId: string, setChatList: React.Dispatch<React.SetStateAction<ChatType[]>>) => {
        return onSnapshot(doc(db, 'users', userId), (doc) => {
            if (doc.exists()) {
                let data = doc.data();
                setChatList(data.chats);
            }
        });
    },
    onChatContent: (chatId: string, setMessageList: React.Dispatch<React.SetStateAction<MessageType[]>>, setUsers: React.Dispatch<React.SetStateAction<string[]>>) => {
        return onSnapshot(doc(db, 'chats', chatId), (doc) => {
            if (doc.exists()) {
                let data = doc.data();
                setMessageList(data.messages);
                setUsers(data.users);
            }
        });
    },
    sendMessage: async (chatId: string, userId: string, type: string, body: string, users: string[]) => {
        let now = new Date();

        await updateDoc(doc(db, 'chats', chatId), {
            messages: arrayUnion({
                type,
                author: userId,
                body,
                date: now
            })
        });

        for (let uid of users) {
            let user = await getDoc(doc(db, 'users', uid));
            let userData = user.data();
            if (userData?.chats) {
                let chatsData = [...userData.chats];

                for (let chat of chatsData) {
                    if (chat.id === chatId) {
                        chat.lastMessage = body;
                        chat.lastMessageDate = now;
                    }
                }

                await updateDoc(doc(db, 'users', uid), {
                    chats: chatsData
                });
            }
        }
    }
}