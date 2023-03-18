import styled from "styled-components";

export const NewChatBody = styled('div')<{open: boolean}> `
    width: 35%;
    max-width: 415px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: ${props  => props.open ? '0' : '-415px'};
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    border-right: 1px solid #DDD;
    transition: all 0.5s ease;

    .newChatBody--header {
        padding: 60px 15px 15px 15px;
        display: flex;
        align-items: center;
        background-color: #00B7A5;

        .newChatBody--backButton {
            width: 40px;
            height: 40px;
            margin-right: 20px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }

        .newChatBody--headTitle {
            line-height: 40px;
            color: #FFF;
            font-size: 19px;
            flex: 1;
            font-weight: bold;
        }
    }

    .newChatBody--list {
        flex: 1;
        overflow-y: auto;
        
        &::-webkit-scrollbar {
            width: 6px;
        }
        &::-webkit-scrollbar-track {
            background-color: #EEE;
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 2px;
        }
        
        .newChatBody--item {
            display: flex;
            align-items: center;
            padding: 10px;
            cursor: pointer;

            &:hover {
                background-color: #F5F5F5;
            }

            .newChatBody--itemAvatar {
                width: 50px;
                height: 50px;
                margin-right: 10px;
                border-radius: 50%;
            }

            .newChatBody--itemName {
                border-bottom: 1px solid #F5F5F5;
            }
        }
    }
`;