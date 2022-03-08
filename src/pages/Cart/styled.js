import styled from "styled-components";

export const Container = styled.main`
    margin: auto;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    h2 {
        margin: 15px 0px;
    }

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        align-items: flex-start;
        flex-wrap: wrap;
    }
`;

export const Content = styled.div`
    display: flex;
    overflow-x: overlay;
    flex-direction: column;
    align-items: center;
    overflow-x: overlay;
    width: 100%;

    ul {
        display: flex;
        width: 100%;
        overflow-x: overlay;
        align-items: center;

        span {
            margin: auto;
        }
    }

    @media (min-width: 1024px) {
        width: 63%;
        flex-direction: column;
        align-items: center;
        ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
    @media (min-width: 1440px) {
        width: 70%;
        ul {
            width: 978px;
        }
    }
`;

export const ContentCart = styled.div`
    width: 90%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    height: 150px;

    h2 {
        margin: 0;
    }

    div {
        display: flex;
        width: 90%;
        justify-content: space-between;
    }

    button {
        width: 90%;
        height: 36px;
        border: 1px solid black;
        border-radius: 5px;
        background: #09f;
        font-size: 14px;
    }

    @media (min-width: 1024px) {
        margin-top: 68px;
    }
`;
