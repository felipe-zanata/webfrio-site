import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';
import './ProgressBar.css'
import { GiCheckMark } from 'react-icons/gi'

const ProgressBar = ({ index, pages, nIndex, name }) => {

    const [pintado, setPintado] = useState('atual');
    // const r = pintar(index, nIndex +1)

    // useEffect (() =>{
        const pintar = (index, nIndex) => {
            if (index === nIndex) {
                return setPintado ('atual')
            } else if (index < nIndex) {
                return setPintado ('concluido')
            } else {
                return setPintado ('proximo')
            }
        }
    // },[])


    return (
            <div className='container'>
                <div className={pintado}>
                    {pintado == 'concluido' ?
                        <GiCheckMark/>
                        :
                    <h1 className={pintado}   >{nIndex}</h1>
                    }
                </div>
                {/* <h3 className= {nIndex < index+1 ? 'concluido': ''}>{name}</h3> */}
                <h3 className={pintado}>{name}</h3>
            </div>
    );
}

export default ProgressBar;