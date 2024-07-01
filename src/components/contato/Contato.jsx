import { Contatos } from './styles';
import { GoMail } from "react-icons/go";
import { CiInstagram } from "react-icons/ci";

function Contato() {
    return (
        <Contatos>
            <div className='max-content'>
                <h1>CONTATOS</h1>
                <div className="flexButtons">
                    <a href="mailto:dehjr1990@gmail.com?subject=Assunto: Olá vim pela pagina web&body=Olá vim pela pagina web." target="_blank" rel="noopener noreferrer">
                        <GoMail />
                    </a>
                    <a href="https://www.instagram.com/fratellimovelaria/" target="_blank" rel="noopener noreferrer">
                        <CiInstagram />
                    </a>
                </div>
            </div>
        </Contatos>
    )
}

export default Contato