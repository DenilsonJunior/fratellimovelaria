import styled from 'styled-components';

export const Home = styled.section`
    position: relative;
    background-color: var(--color02);
    /* background-attachment: fixed; */
    background-image: url(./assets/img/capa.png);
    background-size: cover;
    background-position: center;
    width: 100%;
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
        width: 30rem;
        /* filter: drop-shadow(0.3rem 0.3rem 0.3rem #fff); */
        margin-bottom: 50em;
        /* filter: drop-shadow(0.05rem 0.05rem 0.5rem rgba(255, 255, 255, .3)); */
        @media (max-width: 758px) {
            width: 20rem;
        }
    }

    .text {
        color: white;
        font-size: 1.6rem;
    }
`