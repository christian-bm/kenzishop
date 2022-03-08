import styled from "styled-components";

export const Container = styled.main`
    margin-top: 100px;
    height: 100%;
    width: 100%;
`;

export const Content = styled.ul`
    display: flex;
    width: 100%;
    max-width: 1440px;
    overflow-x: overlay;
    align-items: center;
    margin: auto;

    @media (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;
