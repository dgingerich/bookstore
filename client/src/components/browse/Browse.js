import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Browse.module.css';
import RefinementBar from './RefinementBar/RefinementBar';
import { Book } from '../Book'

export const Browse = () => {

    //will need store state with all possible genres
    const books = useSelector((state) => state.booksReducer);
    //will need local state containing refinement options that is passed up from RefinementBar
    const [refinements, setRefinements] = useState({
        fictionSubgenres: [],
        nonfictionSubgenres: [],
        length: {
            lowerBound: null,
            upperBound: null
        }
    });

    //RefinementType: fictionSubgenres, nonfictionSubgenres, length
    //Refinement: individual element in respective RefinementType
    const toggleActive = (refinementType, refinement) => {

        setRefinements((refinements) => {
            //refinementTypeArray is deep copy of value of refinementType in state
            let refinementTypeArray = [...refinements[refinementType]];

            refinementTypeArray.indexOf(refinement) > -1
                ? refinementTypeArray.splice(refinementTypeArray.indexOf(refinement), 1)
                : refinementTypeArray.push(refinement);

            return { ...refinements, [refinementType]: refinementTypeArray };
        });

    };

    return (
        <div className={styles.browseContainer}>
            <RefinementBar refinements={refinements} toggleActive={toggleActive} />
            <div className={styles.booksContainer}>
                <h2>Browse our collection</h2>
                <div className={styles.booksGrid}>
                    {books.map((book, key) => {
                        return <div className={styles.bookContainer} key={key}><Book productID={book.productID} /></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Browse;