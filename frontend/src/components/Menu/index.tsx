//import logo from '../../assets/img/logo.svg';

import './styles.css';

function Menu() {
    let handleIncrease = () => {
        console.log('incrementar')

    }
    return (
        <menu>

            <button className="dsmeta-red-btn-menu" onClick={handleIncrease = () => { Teste() }}>Incrementar</button>

            <button className="dsmeta-red-btn-menu" onClick={handleIncrease = () => { Teste1() }}>Decrementar</button>

            <button className="dsmeta-red-btn-menu" onClick={handleIncrease = () => { Teste2() }}>Ir para...</button>


        </menu>
    )
}

export default Menu;

function Teste() {
    console.log('apertei o primeiro botão')

}
function Teste1() {
    console.log('apertei o segundo botão')

}
function Teste2() {
    console.log('apertei o terceiro botão')

}