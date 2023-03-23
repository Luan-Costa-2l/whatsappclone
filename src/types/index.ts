export interface ChatItemType {
    chatId: number;
    title: string;
    image: string;
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
}