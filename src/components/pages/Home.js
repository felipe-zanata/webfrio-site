import React from 'react';
import Container from '../../layout/Container';
import figura from '../image/Figura-Mockup-IPhone-PNG 1.png'
import styles from './Home.module.css'

const Home = () => {
    return ( 
         <Container customClass ="min-height">

            <div className={styles.home_container} >
                <h1  >
                    <span>Logística</span> aliada <br />á <span>tecnologia DE<br /> REFRIGERADOS!</span>
                </h1>
                <div className={styles.home_container_txt} >
                    <p>+ Qualidade nas cargas</p>
                    <p>+ Monitoramento</p>
                    <p>+ Tecnologia</p>
                    <p>+ Logistica para o seu negócio</p>
                </div>
                <button className={styles.home_container_button}>
                    saiba mais
                </button>
            </div>
                  <img src= {figura} alt='Teste' />
         </Container> 



     );
}
 
export default Home;