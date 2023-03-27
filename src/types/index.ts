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
    author: number;
    body: string;
    date: string;
}

export interface UserType {
    id: string;
    avatar: string;
    name: string;
    chats?: ChatType[];
}