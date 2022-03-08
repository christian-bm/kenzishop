import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    background: aliceblue;
    width: 100%;
    height: 90px;
    top: 0;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 24px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 90%;
    max-width: 1440px;

    nav {
        margin: 10px 0;
        width: 250px;
        display: flex;
        justify-content: space-between;

        button {
            width: 66px;
            height: 24px;
            background: #09f;
            border: 1px solid black;
            border-radius: 5px;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;
