import {useState} from 'react'
import styles from './ImageCarousel.module.css'
import {BookCard} from '../core/BookCard/BookCard'

export const ImageCarousel = ({ width, productIDs }) => {

    const [index, setIndex] = useState(0);

    const incrementCarousel = (increment) => {
        
        if (index + increment > productIDs.length - 5) {
            setIndex(0);
        } else if (index + increment < 0) {
            setIndex(productIDs.length - 5);
        } else {
            setIndex(index + increment);
        }
    }

    return (
        <div className={styles.carouselContainer} style={{ width: `${width}` }}>
            <div className={styles.leftArrow} onClick={() => {incrementCarousel(-1)}}></div>
            <div className={styles.carousel} style={{ transform: `translate3d(${index * -22}%, 0, 0)` }}>
                {productIDs.map((productID, key) => {
                    return <div className={styles.carouselImage} key={key}><BookCard productID={productID} /></div>
                })}
            </div>
            <div className={styles.rightArrow} onClick={() => {incrementCarousel(1)}}></div>
        </div>
    )
}
