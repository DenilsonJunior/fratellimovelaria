import Line from '../../components/line/Line';
import BtnPadrao from '../../components/button/Button';
import LinkPage from '../../components/linkPage/LinkPage';

import { Home } from './styles';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Capa() {
    return (
        <Home className='py-60 px-20'>
            <img className="logo" src="./assets/img/logo.png" alt="Logo da Fratelli Movelaria" />
            <p className='text'>Boas-vindas</p>
            <Line
                class='mt-20 mb-20'
            />
            <div className="flex flex-wrap gap-6 mb-20">
                <BtnPadrao
                    class="button"
                    nome="Obras Residênciais"
                />
                <BtnPadrao
                    class="button"
                    nome="Obras Comerciais"
                />
            </div>
            <LinkPage link="#slider">
                <MdKeyboardDoubleArrowDown/>
            </LinkPage>
        </Home>
    )
}

export default Capa