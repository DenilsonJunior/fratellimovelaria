import { useState } from 'react'
import './App.css'

import Capa from './paginas/capa/Capa'
import Slider from './paginas/slider/Slider'
import Quem from './paginas/quemSomos/QuemSomos'
import Footer from './paginas/footer/Footer'
import Contatos from './paginas/contato/Contato'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Capa/>
            <Slider
                id='slider'
            />
            <Quem/>
            {/* <Contatos/> */}
            <Footer/>
        </>
    )
}

export default App
