import { MessageType } from "../../types";
import { MessageBody } from "./styles";

interface Props {
    data: MessageType;
}

export const MessageItem = ({ data }: Props) => {
    return (
        <MessageBody>
            <div className="messageBody--container">
                <div className="messageBody--text">{data.body}</div>
                <div className="messageBody--date">{data.date}</div>
            </div>
        </MessageBody>
    )
}