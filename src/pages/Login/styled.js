import styled from "styled-components";

export const Container = styled.main`
    margin-top: 90px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 250px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 5px;
    width: 90%;
    max-width: 320px;
    height: 196px;
    background: aliceblue;
    padding: 10px;

    input {
        height: 26px;
        padding: 0 10px;
        border: 1px solid black;
        border-radius: 5px;
    }

    button {
        height: 26px;
        background: #09f;
        border: 1px solid black;
        border-radius: 5px;
    }
`;
