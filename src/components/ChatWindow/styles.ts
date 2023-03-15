import styled from "styled-components";

export const WindowBody = styled('div') `
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FFF;

    .windowBody--header {
        display: flex;
        align-items: center;
        height: 60px;
        padding: 15px 10px;
        border-left: 1px solid #DDD;
        border-bottom: 1px solid #CCC;
        background-color: rgb(237, 237, 237);

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 15px;
        }

        .windowBody--name {
            flex: 1;
        }

        .windowBody--buttons {
            display: flex;
            align-items: center;
            gap: 10px;

            .windowBody--btn {
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