import React from 'react';

import Container from '../../layout/Container';
import { Link } from 'react-router-dom';
const CriarConta = () => {

    function testeInput(){
        console.log('teste')
    }
    return ( 
        <Container customClass ='min-heigh'>
            <div><p>meu nome</p></div>
            <div>
                <h1>Novo Usuario</h1>
                <Link to ={'/pessoal'}>Pessoa</Link>
            </div>
            <div><p>meu nome</p></div>
        </Container>
     );
}
 
export default CriarConta;