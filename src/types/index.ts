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

export type FileType = 'text' | 'file';
export type BodyType = string | File
export interface MessageType {
    author: string;
    body: string;
    date: Timestamp;
    type?: FileType;
}

export interface UserType {
    id: string;
    avatar: string;
    name: string;
    chats?: ChatType[];
}