import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Slide.module.css';

export const Slide = ({ productID }) => {

    const books = useSelector(state => state.booksReducer);
    const [book, setBook] = useState({
        title: '',
        author: { firstName: '', lastName: '' },
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
        <div className={styles.slideContainer}>
                <NavLink to={`${process.env.PUBLIC_URL}/Book/${productID}`} className={styles.navLink}>
                    <img className={styles.slide} src={`${process.env.PUBLIC_URL}/assets/slides/${book.cover}`}></img>
                </NavLink>
        </div>
    )
}
