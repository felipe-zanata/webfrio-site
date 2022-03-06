import React from 'react';

import './styles.css';

const Veiculo = () => {
    const vPesados = ['Carreta', 'Carreta LS', 'Vanderléia', 'Bitrem', 'Rodotrem']
    return (
        <div id='veiculo'>
            <h1>Veiculo</h1>

            <div>

                {vPesados.map((pesado) => (<label name={pesado} >{pesado}</label>))}
                {vPesados.map((pesado) => (<input type='checkbox' name={pesado} ></input>))}
            </div>
            <div>
                {vPesados.map((pesado) => (<input type='checkbox' name={pesado} ></input>))}
            </div>
        </div>
    );
}

export default Veiculo;