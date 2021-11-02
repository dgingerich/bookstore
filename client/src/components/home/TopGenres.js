import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './TopGenres.module.css'

export const TopGenres = () => {

    const topGenreList = ['Literature', 'Science Fiction & Fantasy', 'Romance', 'Folklore & Mythology']

    const tileColors = ['plum', 'powderblue','mistyrose', 'burlywood']

    return (
        <div>
            <div className={styles.genreTilesContainer}>
                {topGenreList.map((genre, index) => {
                    return <NavLink to={`/browse/Fiction/${genre.replace(' ', '%20')}`} style={{textDecoration: 'none', color:'black'}}><div className={styles.genreTile} style={{backgroundColor: tileColors[index]}} key={index}><p>{genre}</p></div></NavLink>
                })}
            </div>
        </div>
    )
}
