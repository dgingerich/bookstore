import React from 'react'
import styles from './TopGenres.module.css'

export const TopGenres = () => {

    const topGenreList = ['Classics', 'Fantasy', 'Romance']

    return (
        <div>
            <div className={styles["genre-tiles-container"]}>
                {topGenreList.map((genre, index) => {
                    return <div className={styles["genre-tile"]} key={index}><p>{genre}</p></div>
                })}
                <div className={styles["genre-tile"]}><p>More...</p></div>
            </div>
        </div>
    )
}
