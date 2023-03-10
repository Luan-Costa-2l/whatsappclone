import { useState } from 'react';
import { ChatList, Container, ContentArea, SearchArea, Sidebar } from "./App.styles"

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { ChatItem } from './components/ChatItem';
import { ChatIntro } from './components/ChatIntro';

const App = () => {

    const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, ]);
    const [activeChat, setActiveChat] = useState();

    return (
        <Container>
            <Sidebar>
                <div className="header">
                    <img className="header--profile" src="https://graph.facebook.com/1584754295372323/picture" alt="" />
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{color: '#919191'}} />
                        </div>
                        <div className="header--btn">
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
                        <ChatItem key={index} />
                    ))}
                </ChatList>
            </Sidebar>
            <ContentArea>
                {activeChat === undefined &&
                    <ChatIntro />
                }
            </ContentArea>
        </Container>
    )
}

export default App;