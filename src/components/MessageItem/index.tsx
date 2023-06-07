import { useState, useEffect } from 'react';
import { MessageType, UserType } from "../../types";
import { MessageBody } from "./styles";
import { isUrl } from '../../helpers';

interface Props {
    data: MessageType;
    user: UserType;
}

export const MessageItem = ({ data, user }: Props) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        if (data.date.seconds) {
            let date = new Date(data.date.seconds * 1000);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            setTime(`${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}`);  
        }
    }, []);
    
    return (
        <MessageBody who={data.author === user.id}>
            <div className="messageBody--container">
                {!isUrl(data.body) &&
                    <div className="messageBody--text">{data.body}</div>
                }
                {isUrl(data.body) &&
                    <img src={data.body} alt="" className='messageBody--image' />
                }
                <div className="messageBody--date">{time}</div>
            </div>
        </MessageBody>
    )
}