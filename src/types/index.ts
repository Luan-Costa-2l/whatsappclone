import { Timestamp } from "firebase/firestore";

export interface ChatItemType {
    chatId: string;
    title: string;
    image: string;
}

export interface ChatType extends ChatItemType {
    with: string;
    lastMessage?: string;
    lastMessageDate?: Timestamp;
}

export interface MessageType {
    author: string;
    body: string;
    date: string;
    type?: string;
}

export interface UserType {
    id: string;
    avatar: string;
    name: string;
    chats?: ChatType[];
}