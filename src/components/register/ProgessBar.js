import React, { useState, useEffect } from 'react';
import './ProgressBar.css'
import { GiCheckMark } from 'react-icons/gi'
import progress from '../image/progress.svg'
import progressCheck from '../image/progressCheck.svg'

const ProgressBar = ({ index, nIndex, name }) => {

    const [pintado, setPintado] = useState('atual');

    useEffect(() => {
        if (index == nIndex) {
            return setPintado('atual')
        } else if (index > nIndex) {
            return setPintado('concluido')
        } else {
            return setPintado('proximo')
        }
    })

    const RenderImg = () => {
        if (nIndex == 6) {
            return <></>
        } else if (index <= nIndex) {
            return <img src={progress} alt="logo" className='img' />
        } else {
            return <img src={progressCheck} alt="logo" className='img' />
        }
    }

    return (
        <div className='container'>
            <span className='union'>
                <div className={pintado}>
                    {pintado == 'concluido' ?
                        <GiCheckMark fontSize="2em" />
                        : <h1 className={pintado} >{nIndex + 1}</h1>}
                </div>
                <RenderImg />
            </span>
            <h3 className={pintado}>{name}</h3>
        </div>
    );
}

export default ProgressBar;