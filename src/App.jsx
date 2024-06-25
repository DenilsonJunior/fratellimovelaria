import { useState } from 'react'
import './App.css'

import Capa from './paginas/capa/Capa'
import Slider from './paginas/slider/Slider'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Capa/>
            <Slider/>
        </>
    )
}

export default App
