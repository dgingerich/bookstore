import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Book.module.css'

export const Book = ({ productID }) => {

    const [book, setBook] = useState({
        title: "Book Title",
        author: {
            firstName: "First Name",
            lastName: "Last Name"
        },
        summary: "Summary",
        releaseDate: "1 January 1818",
        pages: "280",
        genres: [],
        productID: 0,
        cover: "/assets/bookcovers/frankenstein.jpg"
    });

    const books = useSelector((state) => state.booksReducer);
    //const book = books.find((obj) => obj.productID === productID);
    //const bookData = books.find((obj) => obj.productID === productID);
    useEffect(() => {
        try {
            let bookData = books.find((obj) => obj.productID === productID);
            setBook({
                title: bookData.title,
                author: {
                    firstName: bookData.author.firstName,
                    lastName: bookData.author.lastName
                },
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
        <img className={styles.bookImage} src={book.cover} alt='Book Cover'></img>
    )
}
