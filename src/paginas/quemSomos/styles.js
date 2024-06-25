import styled from 'styled-components';

export const Quem = styled.section`
    background-color: var(--color02);

    h1 {
        color: var(--color01);
    }

    .flex {
        gap: 2rem;
        justify-content: space-between;
        @media (max-width: 768px) {
            flex-direction: column;
        }
        .box {
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (max-width: 768px) {
                width: 100%;
                text-align: center;
            }
            img {
                width: 12rem;
                margin: 0 auto;
            }
            h2 {
                color: var(--color01);
                margin: 1rem 0;
            }
            p {
                color: white;
            }
            ul {
                margin: 1rem 0 0;
                width: 100%;
                padding-left: 2rem;
                color: white;
                font-size: 2rem;
                text-align: left;
            }
        }
    }

`