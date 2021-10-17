import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import styles from './RefinementBar.module.css';
import RefinementSection from './RefinementSection';

export const RefinementBar = () => {
    
    const genres = useSelector((state) => state.genresReducer);

    const [fictionSubgenres, setFictionSubgenres] = useState(['']);
    const [nonfictionSubgenres, setNonfictionSubgenres] = useState(['']);

    useEffect(() => {
        try {
            setFictionSubgenres(genres.find(obj => obj.type === "Fiction").subgenres);
            setNonfictionSubgenres(genres.find(obj => obj.type === "Nonfiction").subgenres);
        } catch (error) {
        }
    }, [genres])
    
    return (
        <div>
            <RefinementSection sectionTitle="Fiction" options={fictionSubgenres}></RefinementSection>
            <RefinementSection sectionTitle="Nonfiction" options={nonfictionSubgenres}></RefinementSection>
        </div>
    )
}

export default RefinementBar;