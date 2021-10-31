import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Slide } from './Slide';
import styles from './Slideshow.module.css';

export const Slideshow = ({ width, timeout, productIDs }) => {

    const slides = ['mistyrose', 'chocolate', 'darkslategray']
    const [index, setIndex] = useState(0)

    const books = useSelector(state => state.booksReducer);

    useEffect(() => {
        setTimeout(() => setIndex(index === productIDs.length - 1 ? 0 : index + 1), timeout)
    })

    return (
        <div className={styles.slideshowContainer} style={{ width: `${width}` }}>
            <div className={styles.slidesContainer} style={{ transform: `translate3d(${index * -100}%, 0, 0)` }}>
                {typeof (books.find((obj) => obj.productID === productIDs[0])) !== 'undefined' &&
                    productIDs.map((productID, key) => {
                        return <Slide className={styles.slide} productID={productID} key={key}/>
                    })
                }
            </div>
        </div>
    )
}
