import {useState} from 'react'
import styles from './ImageCarousel.module.css'
import {Book} from '../Book'

export const ImageCarousel = ({ width }) => {

    //const carouselImages = ['green', 'lightgreen', 'gray', 'darkslategray', 'darkgreen', 'cornflowerblue', 'chocolate', 'mistyrose', 'olive']
    const carouselImages = [1, 2, 3, 4, 5, 6];
    const [index, setIndex] = useState(0);

    const incrementCarousel = (increment) => {
        
        if (index + increment > carouselImages.length - 5) {
            setIndex(0);
        } else if (index + increment < 0) {
            setIndex(carouselImages.length - 5);
        } else {
            setIndex(index + increment);
        }
    }

    return (
        <div className={styles.carouselContainer} style={{ width: `${width}` }}>
            <div className={styles.leftArrow} onClick={() => {incrementCarousel(-1)}}></div>
            <div className={styles.carousel} style={{ transform: `translate3d(${index * -22}%, 0, 0)` }}>
                {carouselImages.map((productID, key) => {
                    return <div className={styles.carouselImage} key={key}><Book productID={productID} /></div>
                })}
            </div>
            <div className={styles.rightArrow} onClick={() => {incrementCarousel(1)}}></div>
        </div>
    )
}
