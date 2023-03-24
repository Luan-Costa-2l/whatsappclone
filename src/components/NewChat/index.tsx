import { useState, useEffect } from 'react';
import { NewChatBody } from "./styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ChatItemType, UserType } from '../../types';
import { api } from '../../firebase';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    user: UserType;
    chatList: ChatItemType[];
}

export const NewChat = ({ open, setOpen, user, chatList }: Props) => {
    const [list, setList] = useState<UserType[]>([]);

    useEffect(() => {
        if(user !== null && list.length === 0 && open) {
            const handleNewChat = async () => {
                    const result = await api.getContactList(user.id);
                    setList(result); 
            }
            handleNewChat()
        }
    }, [open]);

    return (
        <NewChatBody open={open}>
            <div className="newChatBody--header">
                <div className="newChatBody--backButton" onClick={() => setOpen(!open)}>
                    <ArrowBackIcon style={{color: '#FFF'}}/>
                </div>
                <div className="newChatBody--headTitle">
                    Nova Conversa
                </div>
            </div>
            <div className="newChatBody--list">
                {list.map((item, index) => (
                    <div className="newChatBody--item" key={index}>
                        <img className='newChatBody--itemAvatar' src={item.avatar} alt="" />
                        <div className='newChatBody--itemName'>{item.name}</div>
                    </div>
                ))}
            </div>
        </NewChatBody>
    )
}