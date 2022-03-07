import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import Logo from '../components/image/WebFrio.png'

const NavBar = () => {
    return ( 
        <nav className={styles.navbar}>
            <div>
                <img src={Logo} alt="logo" className={styles.img} />
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to ='/'>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to ='/contato'>Contato</Link>
                </li>
                <li className={styles.item}>
                    <Link to ='/produto'>Produto</Link>
                </li>
                <li className={styles.item}>
                    <Link to ='/sobre'>Sobre Nós</Link>
                </li>
                <li className={styles.item}>
                    <Link to ='/Entrar'>Entrar</Link>
                </li>
                <li className={styles.item2}>
                    <Link to ='/criarConta'>Criar conta</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default NavBar;