import { MessageType, UserType } from "../../types";
import { MessageBody } from "./styles";

interface Props {
    data: MessageType;
    user: UserType;
}

export const MessageItem = ({ data, user }: Props) => {
    return (
        <MessageBody who={data.author === user.id}>
            <div className="messageBody--container">
                <div className="messageBody--text">{data.body}</div>
                <div className="messageBody--date">{data.date}</div>
            </div>
        </MessageBody>
    )
}