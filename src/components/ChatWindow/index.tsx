import { ChatItemType } from "../../types";
import { WindowBody } from "./styles";

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

interface Props {
    chat: ChatItemType;
}

export const ChatWindow = ({ chat }: Props) => {
    return (
        <WindowBody>
            <div className="windowBody--header">
                <img src={chat.image} alt={`Profile of ${chat.title}`} className="windowBody--image" />
                <div className="windowBody--name">{chat.title}</div>
                <div className="windowBody--buttons">
                    <div className="windowBody--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className="windowBody--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className="windowBody--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                </div>
            </div>
            <div className="windowBody--content">
                ...
            </div>
            <div className="windowBody--footer">
                <div className="windowBody--pre">
                    <div className="windowBody--btn">
                        <CloseIcon fontSize="inherit" style={{color: '#919191'}} />
                    </div>
                    <div className="windowBody--btn">
                        <InsertEmoticonIcon fontSize="inherit" style={{color: '#919191'}} />
                    </div>
                </div>
                <div className="windowBody--inputArea">
                    <input type="text" placeholder="Escreva uma mensagem" />
                </div>
                <div className="windowBody--pos">
                    <div className="windowBody--btn">
                        <MicIcon fontSize="inherit" style={{color: '#919191'}} />
                    </div>
                </div>
            </div>
        </WindowBody>
    )
}