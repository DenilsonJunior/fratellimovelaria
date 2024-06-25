import styled from 'styled-components';

export const Home = styled.section`
    position: relative;
    background-color: black;
    background-image: url(./assets/img/capa.png);
    background-size: cover;
    background-position: center;
    width: 100%;
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10rem 0;

    .logo {
        width: 30rem;
        /* filter: drop-shadow(0.3rem 0.3rem 0.3rem #fff); */
        margin-bottom: 50em;
    }

    .text {
        color: white;
    }
`