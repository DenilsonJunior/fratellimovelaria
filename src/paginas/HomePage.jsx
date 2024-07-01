import React from 'react';
import Capa from '../components/capa/Capa';
import LinkPage from '../components/linkPage/LinkPage';
import Slider from '../components/slider/Slider';
import QuemSomos from '../components/quemSomos/QuemSomos';
import Contato from '../components/contato/Contato';
import Footer from '../components/footer/Footer';

const HomePage = () => {
    return (
        <>
            <Capa />
            <Slider
                id='slider'
            />
            <QuemSomos />
            <Contato />
            <Footer />
        </>
    );
};

export default HomePage;
