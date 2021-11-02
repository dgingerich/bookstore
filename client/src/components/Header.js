import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><NavLink to='/'><h1 className={styles.title}>Novel</h1></NavLink></div>
            <div className={styles.browse}><NavLink to='/browse'><h4 className={styles.navLink}>Browse</h4></NavLink></div>
            <div className={styles.fiction}><NavLink to='/browse/Fiction'><h4 className={styles.navLink}>Fiction</h4 ></NavLink></div>
            <div className={styles.nonfiction}><NavLink to='/browse/Nonfiction'><h4 className={styles.navLink}>Nonfiction</h4></NavLink></div>
            <div className={styles.shoppingCart}><button onClick={() => alert('Shopping cart functionality has not been implemented yet.')}><ShoppingCartIcon/></button></div>
        </div>
    )
}
