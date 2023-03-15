import { ChatItemType } from "../../types";
import { ChatItemBody } from "./styles"

type Props = {
    item: ChatItemType;
    active: boolean;
    onClick: () => void;
}

export const ChatItem = ({ item, active, onClick }: Props) => {
    return (
        <ChatItemBody onClick={onClick} className={active ? 'active': ''}>
            <div className="chatItemBody--avatar">
                <img src={item.image} alt="" />
            </div>
            <div className="chatItemBody--lines">
                <div className="chatItemBody--line">
                    <div className="chatItemBody--name">{item.title}</div>
                    <div className="chatItemBody--date">19:45</div>
                </div>
                <div className="chatItemBody--line">
                    <div className="chatItemBody--lastMsg">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas quos vel beatae fugit, sunt ut labore numquam. Vitae cupiditate blanditiis quas autem laboriosam hic id placeat quidem aut quia!</p>
                    </div>
                </div>
            </div>
        </ChatItemBody>
    )
}