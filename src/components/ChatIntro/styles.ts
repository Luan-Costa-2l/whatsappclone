import styled from "styled-components";

export const IntroBody = styled('div') `
    background-color: #F8F9FB;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 6px solid #50F268;

    img {
        width: 250px;
        height: 250px;
    }

    h1 {
        font-size: 33px;
        font-weight: normal;
        color: #525252;
        margin: 0;
        margin-top: 30px;
    }

    h2 {
        font-size: 14px;
        font-weight: normal;
        color: #777;
        margin-top: 20px;
        line-height: 25px;
        text-align: center;
    }
`;