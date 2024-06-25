import { Quem } from './styles';

function QuemSomos() {
    return (
        <Quem>
            <div className='max-conteudo'>
                <h1 className='text-center'>QUEM SOMOS - FRATELLI MOVELARIA</h1>
                <div className='flex py-10'>
                    <div className='box'>
                        <p className=''>
                            Definição: Fratelli é uma palavra do vocabulário oficial Italiano que significa “Irmãos”.
                        </p>
                        <p>
                            Dois irmãos em busca de um sonho, este pode ser o início da história de muitos brasileiros, porém, o que se faz para alcançar esse sonho que é o diferencial.
                        </p>
                    </div>
                    <div className='box'>
                        <p>
                            “Parceria” sempre foi uma palavra que definiu os irmãos Denílson Silva e Ramires Valério, 35 e 20 anos de experiência no ramo moveleiro, respectivamente. Após mais de 12 anos em parceria com a Movelaria Paulista, a cumplicidade entre os irmãos originou em Junho de 2015 a Fratelli Movelaria, que atua no segmento moveleiro (móveis sob medida).
                        </p>
                    </div>
                    <div className='box'>
                        <p>
                            São móveis de alto padrão onde são expressas as características pessoais de cada cliente, tornando cada projeto singular, único para cada estilo de vida.
                        </p>
                        <p>
                            Hoje, além de clientes finais, a Fratelli Movelaria estabelece parcerias com arquitetos, dando seu toque de excelência a projetos cada vez mais ousados.
                        </p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='box'>
                        <img src="./assets/img/missao.png" alt=""/>
                        <h2>Missão</h2>
                        <p className=''>
                            Proporcionar estilo somando qualidade e design de alto padrão através de projetos inovadores. Parcerias consistentes são fundamentais para isso.
                        </p>
                    </div>
                    <div className='box'>
                        <img src="./assets/img/visao.png" alt=""/>
                        <h2>Visão</h2>
                        <p className=''>
                            Ser referência no ramo moveleiro por originalidade e qualidade, mantendo sempre a excelência no atendimento, fazendo com que nossos clientes entendam que seus projetos são nossos também, por isso são tratados de forma única.
                        </p>
                    </div>
                    <div className='box'>
                        <img src="./assets/img/valores.png" alt=""/>
                        <h2>Valores</h2>
                        <p className=''>
                            Fraternidade, proporcionada através de parcerias sérias e de sucesso.
                        </p>
                        <ul>
                            <li>
                                <p>Ousadia e originalidade nos projetos.</p>
                            </li>
                            <li>
                                <p>Atendimento personalizado.</p>
                            </li>
                            <li>
                                <p>adequando-se as necessidades de cada cliente.</p>
                            </li>
                            <li>
                                <p>Transparência e Clareza nos processos e prazos.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Quem>
    )
}

export default QuemSomos