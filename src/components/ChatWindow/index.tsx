import { useState, useEffect, useRef } from "react";

import { ChatType, FileType, MessageType, UserType } from "../../types";
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
import { api } from "../../firebase";

interface Props {
    chat: ChatType;
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
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState('');
    const [listening, setListening] = useState(false);
    const [messageList, setMessageList] = useState<MessageType[]>([]);
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        setMessageList([]);
        let unsub = api.onChatContent(chat.chatId, setMessageList, setUsers);
        return unsub;
    }, [chat.chatId]);

    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight -body.current.offsetHeight;
        }
    }, [messageList]);

    const handleEmojiClick = (emoji: EmojiClickData, event: MouseEvent) => {
        setMessage(message + emoji.emoji);
    }

    const handleClosePreview = () => {
        setFile(null);
        setPreview('');
    }

    const handleFileUpload: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
            setPreview(URL.createObjectURL(event.target.files[0]));
            event.target.value = '';
        }
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

    const handleInputKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.code === 'Enter') {
            handleSendClick("text");
        }
    }

    const handleSendClick = async (type: FileType) => {
        if (message !== '' && type === 'text') {
            await api.sendMessage(chat.chatId, user.id, type, message, users);
            setMessage('');
            setEmojiOpen(false);
            return;
        }
        if (file && type === 'file') {
            await api.sendMessage(chat.chatId, user.id, type, file, users);
            setFile(null);
            setPreview('');
        }
    }

    return (
        <WindowBody>
            <div className="windowBody--header">
                <img src={chat.image} alt={`Profile of ${chat.title}`} className="windowBody--image" />
                <div className="windowBody--name">{chat.title}</div>
                <div className="windowBody--buttons">
                    {false &&
                        <div className="windowBody--btn">
                            <SearchIcon style={{color: '#919191'}} />
                        </div>
                    }
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
            {preview &&
                <div className="windowBody--preview">
                    <img src={preview} alt="" />
                </div>
            }
            <div className="windowBody--footer">
                <div className="windowBody--pre">
                    <div className="windowBody--btn" onClick={() => setEmojiOpen(false)} style={{width: emojiOpen ? 26 : 0}}>
                        <CloseIcon fontSize="inherit" style={{color: '#919191'}} />
                    </div>
                    <div className="windowBody--btn" onClick={() => setEmojiOpen(true)}>
                        <InsertEmoticonIcon fontSize="inherit" style={{color: emojiOpen ? '#009688' : '#919191'}} />
                    </div>
                    {!file &&
                        <label className="windowBody--btn" htmlFor="image">
                            <AttachFileIcon style={{color: '#919191'}} />
                        </label>
                    }
                    {file &&
                        <div className="windowBody--btn" onClick={handleClosePreview}>
                            <CloseIcon style={{color: '#919191'}} />
                        </div>
                    }
                    <input type="file" name="image" id="image" accept=".jpg, .jpeg, .png" onChange={handleFileUpload} />
                </div>
                <div className="windowBody--inputArea">
                    <input 
                        type="text" 
                        placeholder="Escreva uma mensagem" 
                        value={message} 
                        onChange={e => setMessage(e.target.value)} 
                        onKeyUp={handleInputKeyUp}
                        disabled={!!file}
                    />
                </div>
                <div className="windowBody--pos">
                    {message === '' && !file &&
                        <div className="windowBody--btn" onClick={handleMicClick}>
                            <MicIcon fontSize="inherit" style={{color: listening ? '#126ECE' : '#919191'}} />
                        </div>
                    }
                    {message !== '' || file &&
                        <div className="windowBody--btn" onClick={() => handleSendClick(message ? 'text' : 'file')}>
                            <SendIcon fontSize="inherit" style={{color: '#919191'}} />
                        </div>
                    }
                </div>
            </div>
        </WindowBody>
    )
}