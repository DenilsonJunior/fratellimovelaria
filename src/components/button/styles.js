import styled from 'styled-components';

export const LinkPadrao = styled.a`
    
`

export const BtnPadrao = styled.button`
    width: fit-content;
    min-width: 30rem;
    margin: 0 auto;
    padding: 1rem 5rem;
    border: solid var(--color01) .2em;
    box-shadow: .3rem .3rem .5rem #0009;
    transition-duration: .3s;
    display: block;
    backdrop-filter: blur(.2rem);
    &:hover {
        transform: scale(.95);
        background-color: rgba(255, 255, 255, .1);
    }

    .text {
        font-size: 1.5rem;
        color: var(--color01) !important;
    }
`