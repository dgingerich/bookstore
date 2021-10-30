import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Browse.module.css';
import RefinementBar from './RefinementBar/RefinementBar';
import { BookCard } from '../core/BookCard/BookCard'

export const Browse = () => {

    //will need store state with all possible genres
    const books = useSelector((state) => state.booksReducer);
    //will need local state containing refinement options that is passed up from RefinementBar
    const [refinements, setRefinements] = useState({
        fictionSubgenres: [],
        nonfictionSubgenres: []
    });

    const [refinedBooks, setRefinedBooks] = useState([]);

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

    //Visible books are refined when refinements changes
    useEffect(() => {
        setRefinedBooks(refineBooks());
    }, [refinements])

    const refineBooks = () => {

        // Refining genres is inclusive, meaning it pulls together a starting list of all possible books.
        // Later refinements will narrow down this list of books, so refinedBooks is generated
        // here and passed on to future refinements
        let tempRefinedBooks = refineGenres();

        return tempRefinedBooks;


    }

    const refineGenres = () => {
        let tempRefinedBooks = [];
        let booksCopy = books.map((book) => book);

        booksCopy.forEach(book => {
            let bookAdded = false;

            book.genres.forEach(bookGenre => {
                if (bookAdded) {
                    return;
                } else {
                    let refinementGenres = [...refinements.fictionSubgenres, ...refinements.nonfictionSubgenres];

                    //if no boxes are checked, show all books
                    if (refinementGenres.length === 0) {
                        tempRefinedBooks.push(book);
                        bookAdded = true;
                    } else {
                        refinementGenres.forEach(refinementGenre => {
                            if (bookGenre === refinementGenre) {
                                tempRefinedBooks.push(book);
                                bookAdded = true;
                            }
                        });
                    }
                }
            });
        });

        return tempRefinedBooks;
    }


    return (
        <div className={styles.browseContainer}>
            <RefinementBar refinements={refinements} toggleActive={toggleActive} />
            <div className={styles.booksContainer}>
                <h2>Browse our collection</h2>
                <div className={styles.booksGrid}>
                    {refinedBooks.map((book, key) => {
                        return <div className={styles.bookContainer} key={key}><BookCard productID={book.productID} /></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Browse;