import React from 'react';
import { HiOfficeBuilding, HiOutlineTruck } from 'react-icons/hi'

import './styles.css';

const Pessoal = () => {

    return (
            <div id='pessoa'>
                <div className='progress'>

                </div>
                <div className='box'>
                    <h1>Seja um membro!</h1>
                    <h2>Para que você se torne parte de nossa comunidade, precisará fornecer alguns dados necessários para utilizar nossa plataforma.</h2>
                    <div className='boxButton'>
                        <button>
                            <HiOfficeBuilding color="#63CCCF" fontSize="2em" />
                            <div>Sou Empresa</div>
                        </button>
                        <button>
                            <HiOutlineTruck color="#63CCCF" fontSize="2em" />
                            <div>Sou Motorista</div>
                        </button>
                    </div>
                    <input type='text' placeholder='Nome' id='nome'></input>
                    <input type='text' placeholder='Sobrenome' id='sobrenome'></input>
                    <input type='text' placeholder='email' id='sobrenome'></input>
                </div>
            </div>
    );
}

export default Pessoal;