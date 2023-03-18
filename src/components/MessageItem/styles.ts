import styled from "@emotion/styled";

export const MessageBody = styled('div')<{who: boolean}> `
    margin-bottom: 10px;
    display: flex;
    justify-content: ${props => props.who ? 'end' : 'start'};

    .messageBody--container {
        max-width: 90%;
        padding: 3px;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 1px 3px #BBB;
        background-color: ${props => props.who ? '#DCF8C6' : '#FFF'};
        border-radius: 10px;

        .messageBody--text {
            margin: 5px 40px 5px 5px;
            font-size: 14px;
        }

        .messageBody--date {
            margin-right: 5px;
            font-size: 12px;
            color: #999;
            text-align: right;
            height: 15px;
            margin-top: -15px;
        }
    }
`;