import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props = {
    saleId: number;
}

{/*function handleClick(id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("Menu acionado com sucesso!");
        })
}*/}

function MenuButton() {
    return (
        <>
            <div className="dsmeta-red-btn-menu" onClick={() => handleClick(1)}>
                "Ir para página..."
            </div>
            
        </>
    )
}

export default MenuButton;

function handleClick(arg0: number): void {
    throw new Error('Function not implemented.');
}
