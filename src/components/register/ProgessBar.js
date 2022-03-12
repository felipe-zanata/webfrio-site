import React from 'react';
import { useState } from 'react';
import './ProgressBar.css'

const ProgressBar = ({index, pages}) => {

    const [page, setPage] = useState(0);

    const teste = true;

    return (
        <div className='container'>
            <div>
                {index + 1}
            </div>
            <h3 >{pages[0]}</h3>
        </div> 
        );
}
 
export default ProgressBar;