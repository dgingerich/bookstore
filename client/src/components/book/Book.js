import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Book.module.css';

export const Book = ({ match }) => {

    const productID = match.params.productID.toString();

    const [book, setBook] = useState({
        title: "",
        author: "",
        summary: "",
        releaseDate: "",
        pages: "",
        genres: [],
        productID: '',
        cover: ""
    });

    const books = useSelector((state) => state.booksReducer);
    //const book = books.find((obj) => obj.productID === productID);
    //const bookData = books.find((obj) => obj.productID === productID);
    useEffect(() => {
        try {
            let bookData = books.find((obj) => obj.productID == productID);
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
        }
    }, [books, match]);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={`${process.env.PUBLIC_URL}/assets/bookcovers/${book.cover}`} alt='Book Cover'></img>
            </div>
            <div className={styles.bookHeader}>
                <h1>{book.title}</h1>
                <h3>by {book.author}</h3>
            </div>
            <div className={styles.summaryContainer}>
                <h4>{book.summary}</h4>
            </div>
            <div className={styles.infoContainer}>
                <h3>Product Details</h3>
                <table className={styles.infoTable}>
                    <tbody>
                        <tr>
                            <th>Pages:</th>
                            <td>{book.pages}</td>
                        </tr>
                        <tr>
                            <th>Genres:</th>
                            <td>
                                {book.genres.map((genre, key) => {
                                    return <h4 className={styles.genres} key={key}>{genre}</h4>
                                })}
                            </td>
                        </tr>
                        <tr>
                            <th>Release Date:</th>
                            <td>{book.releaseDate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Book;
