import { ChatItemBody } from "./styles"

type Props = {
    img: string;
    name: string;
    date: string;
    lastMessage: string;
}

export const ChatItem = () => {
    return (
        <ChatItemBody>
            <div className="chatItemBody--avatar">
                <img src="https://graph.facebook.com/1584754295372323/picture" alt="" />
            </div>
            <div className="chatItemBody--lines">
                <div className="chatItemBody--line">
                    <div className="chatItemBody--name">Luan Cordeiro</div>
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