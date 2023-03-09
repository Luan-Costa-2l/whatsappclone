import styled from "styled-components";

export const Container = styled('div') `
    height: 100vh;
    background-color: #EDEDED;
    font-family: 'Segoe UI', Helvetica, 'Lucida Grande', Arial, sans-serif;
    display: flex;
`;

export const Sidebar = styled('div') `
    width: 415px;

    .header {
        height: 60px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid black;

        .header--profile {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .header--buttons {
            flex: 1;
            display: flex;
            justify-content: end;
            align-items: center;
            gap: 3px;

            .header--btn {
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                cursor: pointer;

                &:hover {
                    background-color: #DDD;
                }
            }
        }
    }
`;

export const ContentArea = styled('div') `
    background-color: green;
    flex: 1;
`;