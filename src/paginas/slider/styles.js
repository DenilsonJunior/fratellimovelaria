import styled from 'styled-components';

export const SecSliders = styled.section`
    position: relative;
    background-color: var(--color02);
    display: flex;
    justify-content: center;
    .swiper {
        width: 100%;
        height: 100%;
    }
    
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
    
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .swiper {
        margin-left: auto;
        margin-right: auto;
    }
`

export const Image = styled.div`
    width: 100%;
    /* background-color: red; */
`