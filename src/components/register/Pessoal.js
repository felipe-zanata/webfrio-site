import React from 'react';

import './styles.css';

const Pessoal = () => {

    return (
        <div id='pessoa'>
            <h1>Pessoa</h1>
            <div >
                <button>Sou Empresa</button>
                <button>Sou Motorista</button>
            </div>
            <input type='text' placeholder='Nome' id='nome'></input>
            <input type='text' placeholder='Sobrenome' id='sobrenome'></input>
            <input type='text' placeholder='email' id='sobrenome'></input>
        </div>



    );
}

export default Pessoal;