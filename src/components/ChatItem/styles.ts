import styled from "styled-components";

export const ChatItemBody = styled('div') `
    height: 72px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #DDD;
    }

    .chatItemBody--avatar img {
        width: 50px;
        height: 50px;
        margin: 0 10px;
        border-radius: 50%;
    }

    .chatItemBody--lines {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px 10px 10px 0;
        height: 72px;
        border-bottom: 1px solid #DDD;

        flex-wrap: nowrap;
        min-width: 0;

        .chatItemBody--line {
            display: flex;
            justify-content: space-between;

            .chatItemBody--name {
                font-weight: bold;
            }

            .chatItemBody--date {
                font-size: 12px;
                color: #999;
            }

            .chatItemBody--lastMsg {
                font-size: 14px;
                color: #999;
                
                p {
                    width: 100%;
                    max-width: 320px;
                    margin: 0;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
`;