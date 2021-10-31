import React from 'react'
import styles from './TopGenres.module.css'

export const TopGenres = () => {

    const topGenreList = ['Literature', 'Fantasy & Science Fiction', 'Romance', 'History']

    const tileColors = ['plum', 'powderblue','mistyrose', 'burlywood']

    return (
        <div>
            <div className={styles.genreTilesContainer}>
                {topGenreList.map((genre, index) => {
                    return <div className={styles.genreTile} style={{backgroundColor: tileColors[index]}} key={index}><p>{genre}</p></div>
                })}
            </div>
        </div>
    )
}
