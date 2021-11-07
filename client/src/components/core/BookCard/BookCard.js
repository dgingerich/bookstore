import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './BookCard.module.css'

export const BookCard = ({ productID }) => {

    const [book, setBook] = useState({
        title: "Book Title",
        author: "",
        summary: "Summary",
        releaseDate: "1 January 1818",
        pages: "280",
        genres: [],
        productID: 0,
        cover: "frankenstein.jpg"
    });

    const books = useSelector((state) => state.booksReducer);
    //const book = books.find((obj) => obj.productID === productID);
    //const bookData = books.find((obj) => obj.productID === productID);
    useEffect(() => {
        try {
            let bookData = books.find((obj) => obj.productID === productID);
            setBook({
                title: bookData.title,
                author: bookData.author,
                summary: bookData.summary,
                releaseDate: bookData.releaseDate,
                pages: bookData.pages,
                genres: bookData.genres,
                productID: bookData.productID,
                cover: bookData.cover
            });
        } catch (error) {
            //console.log(error)
        }
    }, [books, productID]);

    return (
        <div className={styles.bookCardContainer}>
            <div className={styles.bookImageContainer}>
                <NavLink to={`${process.env.PUBLIC_URL}/Book/${productID}`} className={styles.navLink}><img className={styles.bookImage} src={`${process.env.PUBLIC_URL}/assets/bookcovers/${book.cover}`} alt='Book Cover'></img></NavLink>
            </div>
            <NavLink to={`${process.env.PUBLIC_URL}/Book/${productID}`} className={styles.navLink}><h4 className={styles.bookTitle}>{book.title}</h4></NavLink>
            <h5 className={styles.bookAuthor}>{book.author}</h5>
        </div>
    )
}
