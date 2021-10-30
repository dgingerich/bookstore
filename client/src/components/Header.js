import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.logo}`}><NavLink to='/'><h1 className={styles.title}>Novel</h1></NavLink></div>
            <div className={`${styles.browse}`}><NavLink to='/browse'><h4 className={styles.navLink}>Browse</h4></NavLink></div>
            <div className={`${styles.fiction}`}><h4 className={styles.navLink}>Fiction</h4 ></div>
            <div className={`${styles.nonfiction}` }><h4 className={styles.navLink}>Nonfiction</h4></div>
            <div className={`${styles.shoppingCart}`}><h4 className={styles.navLink}>Shopping Cart</h4></div>
        </div>
    )
}
