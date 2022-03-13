import React from 'react';

import Container from '../../layout/Container';
import { Link } from 'react-router-dom';

const CriarConta = () => {

    function testeInput(){
        console.log('teste')
    }

    return ( 
        <Container customClass ='min-heigh'>
                <Link to ={'/pessoal'}/>
        </Container>
     );
}
 
export default CriarConta;