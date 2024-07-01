import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './paginas/HomePage';
// import Capa from './components/capa/Capa'
// import Slider from './components/slider/Slider'
// import Quem from './components/quemSomos/QuemSomos'
// import Footer from './components/footer/Footer'
// import Contatos from './components/contato/Contato'

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} /> */}
                    {/* Adicione outras rotas aqui */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
