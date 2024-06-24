import styled from 'styled-components';

export const PageLink = styled.a`
    width: 15rem;
    height: 5rem;
    cursor: pointer;
    position: absolute;
    bottom: 3rem;
    p {
        text-align: center;
    }
    svg {
        width: 100%;
        height: 100%;
        color: var(--color01);
        position: absolute;
        animation: arrowDown 1s infinite;
    }

    @keyframes arrowDown {
        0% {
            top: 0;
        }
        100% {
            top: 2rem;
        }
    }
`