import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Slide.module.css';

export const Slide = ( {productID} ) => {

    const books = useSelector(state => state.booksReducer);
    const [book, setBook] = useState({
        title: '',
        author: {firstName: '', lastName: ''},
        summary: '',
        releaseDate: '',
        pages: '',
        genres: [''],
        productID: '',
        cover: ''
    });


    useEffect(() => {
        try {
            setBook(books.find((obj) => obj.productID === productID));
        } catch (error) {
            console.log(error);
        }
    }, [books]);

    return (
        <div className={styles.slide} style={{ backgroundColor: 'peachpuff' }}>
            <div className={styles.slideContent}>
                <img className={styles.bookCover} src={book.cover} alt='Book Cover' />
                <h4 className={styles.bookTitle}>{book.title}</h4>
                {book.author.firstName !== undefined && <h4 className={styles.authorFirstName}>{book.author.firstName}</h4>}
                {book.author.middleName !== undefined && <h4 className={styles.authorMiddleName}>{book.author.middleName}</h4>}
                {book.author.lastName !== undefined && <h4 className={styles.authorLastName}>{book.author.lastName}</h4>}
            </div>
        </div>
    )
}
