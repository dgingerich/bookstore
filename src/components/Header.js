import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>Novel</h1>
            <h4 className={`${styles.browse} ${styles.link}`}>Browse</h4>
            <h4 className={`${styles.fiction} ${styles.link}`}>Fiction</h4>
            <h4 className={`${styles.nonfiction}  ${styles.link}`}>Nonfiction</h4>
            <h4 className={`${styles.shoppingCart} ${styles.link}`}>Shopping Cart</h4>
        </div>
    )
}
