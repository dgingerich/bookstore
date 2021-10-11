import React from 'react'
import styles from './ImageCarousel.module.css'

export const ImageCarousel = ({ width }) => {

    const carouselImages = ['green', 'lightgreen', 'gray', 'darkslategray', 'darkgreen', 'cornflowerblue', 'chocolate', 'mistyrose', 'olive']
    const [index, setIndex] = React.useState(0)

    const incrementCarousel = (increment) => {
        
        if (index + increment >= carouselImages.length - 5) {
            setIndex(0)
        } else if (index + increment < 0) {
            setIndex(carouselImages.length - 6)
        } else {
            setIndex(index + increment)
        }
    }

    return (
        <div className={styles.carouselContainer} style={{ width: `${width}` }}>
            <div className={styles.leftArrow} onClick={() => {incrementCarousel(-1)}}></div>
            <div className={styles.carousel} style={{ transform: `translate3d(${index * -22}%, 0, 0)` }}>
                {carouselImages.map((image, key) => {
                    return <div className={styles.carouselImage} key={key} style={{ backgroundColor: image }} />
                })}
            </div>
            <div className={styles.rightArrow} onClick={() => {incrementCarousel(1)}}></div>
        </div>
    )
}
