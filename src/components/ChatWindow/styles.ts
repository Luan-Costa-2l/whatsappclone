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

    .windowBody--content {
        flex: 1;
        overflow-y: auto;
        padding: 20px 30px;
        background-image:  url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
        background-size: center;
    }

    .windowBody--emojiArea {

        .EmojiPickerReact {
            transition: all .3s ease;
        }

        .EmojiPickerReact li.epr-emoji-category .epr-emoji-category-label {
            position: block;
        }

        .EmojiPickerReact, .EmojiPickerReact li.epr-emoji-category .epr-emoji-category-label {
            background-color: #EDEDED;
        }
    }

    .windowBody--footer {
        padding: 10px 15px;
        display: flex;
        align-items: center;
        min-height: 60px;
        border-left: 1px solid #DDD;

        .windowBody--pre {
            display: flex;
            gap: 10px;
            font-size: 26px;

            .windowBody--btn {
                cursor: pointer;
                overflow: hidden;
                transition: all 0.3s ease;
            }
        }

        .windowBody--inputArea {
            flex: 1;
            height: 100%;
            margin: 0 15px;

            input {
                padding: 10px;
                width: 100%;
                height: inherit;
                border-radius: 30px;
                border: 1px solid #CCC;
                outline: 0;
                color: #4A4A4A;
            }
        }

        .windowBody--pos {
            display: flex;
            gap: 10px;
            font-size: 26px;

            .windowBody--btn {
                cursor: pointer;
            }
        }
    }
`;