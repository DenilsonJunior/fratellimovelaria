import styled from 'styled-components';

export const Contatos = styled.section`
    background-color: var(--color02);
    padding: 0 0 5rem;

    h1 {
        color: var(--color01);
        text-align: center;
    }

    .flexButtons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
        a {
            text-decoration: none;
            transition-duration: .3s;
            svg {
                transition-duration: .3s;
                width: 3.5rem;
                height: 3.5rem;
                /* color: var(--color01); */
                color: white;
            }

            &:hover {
                transform: scale(.9);
                svg {
                    color: var(--color01);
                }
            }
        }
    }

`