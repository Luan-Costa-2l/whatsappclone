export interface ChatItemType {
    chatId: string;
    title: string;
    image: string;
}

export interface ChatType extends ChatItemType {
    with: string;
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