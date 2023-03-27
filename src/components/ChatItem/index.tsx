import { useState, useEffect } from 'react';
import { ChatType } from "../../types";
import { ChatItemBody } from "./styles"

type Props = {
    item: ChatType;
    active: boolean;
    onClick: () => void;
}

export const ChatItem = ({ item, active, onClick }: Props) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        if (item.lastMessageDate) {
            let date = new Date(item.lastMessageDate.seconds * 1000);
            let hDate = date.getHours();
            let mDate = date.getMinutes();
            setTime(`${hDate < 10 ? '0'+hDate : hDate}:${mDate < 10 ? '0'+mDate : mDate}`)
        }
    }, [item]);
    
    return (
        <ChatItemBody onClick={onClick} className={active ? 'active': ''}>
            <div className="chatItemBody--avatar">
                <img src={item.image} alt="" />
            </div>
            <div className="chatItemBody--lines">
                <div className="chatItemBody--line">
                    <div className="chatItemBody--name">{item.title}</div>
                    <div className="chatItemBody--date">{time}</div>
                </div>
                <div className="chatItemBody--line">
                    <div className="chatItemBody--lastMsg">
                        <p>{item.lastMessage}</p>
                    </div>
                </div>
            </div>
        </ChatItemBody>
    )
}