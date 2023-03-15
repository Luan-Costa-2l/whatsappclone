import { ChatItemType } from "../../types";
import { WindowBody } from "./styles";

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
            <div className="windowBody--main">
                i'm a main
            </div>
            <div className="windowBody--footer">
                i'm not a header
            </div>
        </WindowBody>
    )
}