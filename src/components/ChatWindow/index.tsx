import { useState, useEffect, useRef } from "react";

import { ChatItemType, MessageType, UserType } from "../../types";
import { WindowBody } from "./styles";

import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import { MessageItem } from "../MessageItem";

interface Props {
    chat: ChatItemType;
    user: UserType;
}

export const ChatWindow = ({ chat, user }: Props) => {
    const body = useRef<HTMLDivElement>(document.createElement('div'));
    let recognition: any;

    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)();
        recognition.interimResults = true;
        recognition.lang = 'pt-BR';
    } else {
        alert('Reconhecimento de fala não suportado pelo navegador');
    }
        
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [listening, setListening] = useState(false);
    const [messageList, setMessageList] = useState<MessageType[]>([{body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla', date: '19:00', author: 2}, {body: 'bla bla bla', date: '19:00', author: 1},   {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla', date: '19:00', author: 2}, {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla', date: '19:00', author: 2}, {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla', date: '19:00', author: 2}, {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla', date: '19:00', author: 2}, {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla', date: '19:00', author: 2}, {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla bla', date: '19:00', author: 1}, {body: 'bla bla', date: '19:00', author: 2}, {body: 'bla bla bla', date: '19:00', author: 1}]);

    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight -body.current.offsetHeight;
        }
    }, [messageList]);

    const handleEmojiClick = (emoji: EmojiClickData, event: MouseEvent) => {
        setMessage(message + emoji.emoji);
    }

    const handleMicClick = () => {
        if (recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }

            recognition.onend = () => {
                setListening(false);
            }

            recognition.onresult = (event: any) => {
                setMessage(event.results[0][0].transcript);
            }

            recognition.start();
        }
    }

    const handleSendClick = () => {
        // code here
    }

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
            <div className="windowBody--content" ref={body}>
                {messageList.map((item, index) => (
                    <MessageItem key={index} data={item} user={user} />
                ))}
            </div>
            <div className="windowBody--emojiArea">
                <EmojiPicker width='100%' height={emojiOpen ? 250 : 0} skinTonesDisabled previewConfig={{showPreview: false}} searchDisabled onEmojiClick={handleEmojiClick} />
            </div>

            <div className="windowBody--footer">
                <div className="windowBody--pre">
                    <div className="windowBody--btn" onClick={() => setEmojiOpen(false)} style={{width: emojiOpen ? 26 : 0}}>
                        <CloseIcon fontSize="inherit" style={{color: '#919191'}} />
                    </div>
                    <div className="windowBody--btn" onClick={() => setEmojiOpen(true)}>
                        <InsertEmoticonIcon fontSize="inherit" style={{color: emojiOpen ? '#009688' : '#919191'}} />
                    </div>
                </div>
                <div className="windowBody--inputArea">
                    <input type="text" placeholder="Escreva uma mensagem" value={message} onChange={e => setMessage(e.target.value)} />
                </div>
                <div className="windowBody--pos">
                    {message === '' &&
                        <div className="windowBody--btn" onClick={handleMicClick}>
                            <MicIcon fontSize="inherit" style={{color: listening ? '#126ECE' : '#919191'}} />
                        </div>
                    }
                    {message !== '' &&
                        <div className="windowBody--btn" onClick={handleSendClick}>
                            <SendIcon fontSize="inherit" style={{color: '#919191'}} />
                        </div>
                    }
                </div>
            </div>
        </WindowBody>
    )
}