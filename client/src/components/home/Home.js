import React from 'react'
import { Slideshow } from '../core/Slideshow/Slideshow.js'
import { TopGenres } from './TopGenres'
import { ImageCarousel } from './ImageCarousel'
import styles from './Home.module.css'

export const Home = () => {
    return (
        <>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Slideshow width="90%" timeout="6000" productIDs={[2, 3, 6]} />
            </div>
            <div style={{ margin: 'auto 5%' }}>
                <h2 className={styles.subtitle}>Explore our top genres!</h2>
                <TopGenres />
                <h2 className={styles.subtitle}> Bestsellers </h2>
                <ImageCarousel productIDs={[1, 2, 3, 4, 5, 6, 7, 8]} />
                <h2 className={styles.subtitle}> Read it before you watch it</h2>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Slideshow width="50%" timeout="3000" productIDs={[2, 3, 6]} />
                </div>
            </div>
        </>
    );
}

export default Home;
