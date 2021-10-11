import React from 'react'
import styles from './Slideshow.module.css'

export const Slideshow = ({ width, timeout }) => {

    const slides = ['mistyrose', 'chocolate', 'darkslategray']
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        setTimeout(() => setIndex(index === slides.length - 1 ? 0 : index + 1), timeout)
    })

    return (
        <div className={styles.slideshowContainer} style={{ width: `${width}` }}>
            <div className={styles.slidesContainer} style={{ transform: `translate3d(${index * -100}%, 0, 0)` }}>
                {slides.map((slide, key) => {
                    return <div className={styles.slide} key={key} style={{ backgroundColor: slide }} />
                })}
            </div>
        </div>
    )
}
