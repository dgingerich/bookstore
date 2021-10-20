import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'

import styles from './RefinementBar.module.css';
import RefinementSection from './RefinementSection';

export const RefinementBar = ( {toggleActive} ) => {

    const genres = useSelector((state) => state.genresReducer);

    const [refinements, setRefinements] = useState({
        fictionSubgenres : [],
        nonfictionSubgenres : [],
        length : {
            lowerBound : null,
            upperBound : null
        }
    });

    useEffect(() => {
        try {
            setRefinements({...refinements, fictionSubgenres : genres.find((obj) => obj.type === "Fiction").subgenres, 
            nonfictionSubgenres : genres.find(obj => obj.type === "Nonfiction").subgenres});
        } catch (error) {
        }
    }, [genres]);
    
    return (
        <div className={styles.refinementBarContainer}>
            <RefinementSection sectionTitle="Fiction" section="fictionSubgenres" options={refinements.fictionSubgenres} toggleActive={toggleActive}></RefinementSection>
            <RefinementSection sectionTitle="Nonfiction" section="nonfictionSubgenres" options={refinements.nonfictionSubgenres} toggleActive={toggleActive}></RefinementSection>
        </div>
    )
}

export default RefinementBar;