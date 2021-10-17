import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Browse.module.css';
import RefinementBar from './RefinementBar/RefinementBar';
import {Book} from '../Book'

export const Browse = () => {

    //will need store state with all possible genres
    const books = useSelector((state) => state.booksReducer);
    //will need local state containing refinement options that is passed up from RefinementBar
    
    return (
        <div className={styles.browseContainer}>
            <h2>Browse our collection</h2>
            <RefinementBar/>
            {books.map((book, key) => {
                return <div className={styles.bookContainer}><Book productID={book.productID} key={key}/></div>
            })}
        </div>
    )
}

export default Browse;