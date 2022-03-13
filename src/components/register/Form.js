import React from 'react';
import { useState } from 'react';

import Pessoal from './Pessoal'
import Veiculo from './Veiculo'
import Antt from './Antt'
import Carroceria from './Carroceria'
import Rastreador from './Rastreador'
import Contato from './Contato'
import Senha from './Senha'
import ProgressBar from './ProgessBar';

import styles from './Form.module.css'

const Form = () => {
    const [page, setPage] = useState(0);
    const pages = ['Pessoal', 'Veiculo', 'Antt', 'Carroceria', 'Rastreador', 'Contato', 'Senha']

    const pagesDisplay = () => {
        if (page === 0) {
            return <Pessoal />
        } else if (page === 1) {
            return <Veiculo />
        } else if (page === 2) {
            return <Antt />
        } else if (page === 3) {
            return <Carroceria />
        } else if (page === 4) {
            return <Rastreador />
        } else if (page === 5) {
            return <Contato />
        } else if (page === 6) {
            return <Senha />
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.progessBar}>
                {pages.map((p, i) => (<ProgressBar index={page} nIndex={i} name={p} />))}
            </div>
            <div className={styles.form_container}>
                <div className={styles.container}>{pagesDisplay()}</div>
                <div >
                    <button className={styles.button}
                        disabled={page === 0}
                        onClick={() => { setPage((currPage) => currPage - 1); }}
                    >Voltar
                    </button>
                    <button className={styles.button}
                        disabled={page === pages.length - 1}
                        onClick={() => { setPage((currPage) => currPage + 1) }}
                    >Proximo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;