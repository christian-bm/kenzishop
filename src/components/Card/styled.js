import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 9px;
    border: 1px solid black;
    border-radius: 5px;
    background: aliceblue;

    h3,
    span {
        margin: 5px;
    }

    figure {
        img {
            width: 300px;
        }
    }

    button {
        width: 90%;
        height: 40px;
        background: #09f;
        border: 1px solid black;
        font-size: 16px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
`;
