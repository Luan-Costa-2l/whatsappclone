import { useState } from 'react';
import { ChatList, Container, ContentArea, SearchArea, Sidebar } from "./App.styles"

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { ChatItem } from './components/ChatItem';
import { ChatIntro } from './components/ChatIntro';
import { ChatItemType, UserType } from './types';
import { ChatWindow } from './components/ChatWindow';
import { NewChat } from './components/NewChat';
import { Login } from './components/Login';

import { User } from 'firebase/auth'
import { api } from './firebase';

const App = () => {

    const [chatList, setChatList] = useState<ChatItemType[]>([
        {chatId: 1, title: 'Fulano de Tal', image: 'https://graph.facebook.com/1584754295372323/picture'},
        {chatId: 2, title: 'Ciclano ', image: 'https://graph.facebook.com/1584754295372323/picture'},
        {chatId: 3, title: 'Beltrano de Call', image: 'https://graph.facebook.com/1584754295372323/picture'},
        {chatId: 4, title: 'Luan Costa', image: 'https://graph.facebook.com/1584754295372323/picture'},
    ]);
    const [activeChat, setActiveChat] = useState<ChatItemType | undefined>();
    const [user, setUser] = useState<UserType | null>(null);
    const [newChatOpen, setNewChatOpen] = useState(false);

    const handleLoginData = async (userInfo: User) => {
        if (userInfo.displayName !== null && userInfo.photoURL !== null) {
            let newUser = {
                id: userInfo.uid,
                name: userInfo.displayName,
                avatar: userInfo.photoURL ?? 'https://graph.facebook.com/1584754295372323/picture'
            }
            await api.addUser(newUser);
            setUser(newUser);
        } else {
            alert('Nome ou foto inválidos.')
        }
        
    }

    if (user === null) {
        return (<Login onRecive={handleLoginData} />);
    }

    return (
        <Container>
            <Sidebar>
                <NewChat 
                    open={newChatOpen} 
                    setOpen={setNewChatOpen} 
                    user={user} 
                    chatList={chatList}
                />
                <div className="header">
                    <img className="header--profile" src={user.avatar} alt="" />
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{color: '#919191'}} />
                        </div>
                        <div className="header--btn" onClick={() => setNewChatOpen(!newChatOpen)}>
                            <ChatIcon style={{color: '#919191'}} />
                        </div>
                        <div className="header--btn">
                            <MoreVertIcon style={{color: '#919191'}} />
                        </div>
                    </div>
                </div>
                <SearchArea>
                    <div className="search--input">
                        <SearchIcon fontSize="small" style={{color: '#919191'}} />
                        <input type="search" name="search" placeholder="Procurar ou começar uma nova conversa." />
                    </div>
                </SearchArea>
                <ChatList>
                    {chatList.map((item, index) => (
                        <ChatItem key={index} item={item} active={item.chatId === activeChat?.chatId} onClick={() => setActiveChat(item)} />
                    ))}
                </ChatList>
            </Sidebar>
            <ContentArea>
                {activeChat !== undefined &&
                    <ChatWindow chat={activeChat} user={user} />
                }
                {activeChat === undefined &&
                    <ChatIntro />
                }
            </ContentArea>
        </Container>
    )
}

export default App;