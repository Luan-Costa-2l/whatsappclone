import { Container, ContentArea, Sidebar } from "./App.styles"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const App = () => {
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
            </Sidebar>
            <ContentArea>
            ...
            </ContentArea>
        </Container>
    )
}

export default App;