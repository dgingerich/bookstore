import React, { useState, useEffect } from 'react';
import RefinementOption from './RefinementOption';
import { useSelector } from 'react-redux'

import styles from './RefinementSection.module.css';

export const RefinementSection = ({ sectionTitle, section, refinements, setRefinements }) => {
    //Takes title (eg. "Subgenre") and array of options for that section (eg. "["Mystery", "Romance", "Mythology"]")

    //Refinement options are visible when expanded
    const [expanded, setExpanded] = useState(true);

    //Toggling checked sets all sub options equal to checked
    const [checked, setChecked] = useState(false);

    const genres = useSelector((state) => state.genresReducer);

    const [options, setOptions] = useState(['']);

    const handleOnClick = () => {
        setRefinements((refinements) => {

            if (!checked) {
                return { ...refinements, [section]: options };
            } else {
                return { ...refinements, [section]: [] };
            }
        });
    }

    useEffect(() => {
        setChecked(refinements[section].length === options.length);
    }, [refinements])

    useEffect(() => { 
        try {
            setOptions(genres.find((obj) => obj.type === section).subgenres);
        } catch (error) { }
    }, [genres])

    return (
        <div>
            <div className={styles.header}>

                <button onClick={handleOnClick} className={styles.sectionTitle}>
                    <input className={styles.checkmark} type="checkbox" checked={checked} readOnly/>
                    {sectionTitle}
                </button>

                <button className={styles.expandedIndicator} onClick={() => setExpanded(!expanded)}>{expanded ? '-' : '+'}</button>
            </div>

            <ul style={{ display: `${expanded ? 'inline-block' : 'none'}` }}>
                {options.map((option, key) => {
                    return (
                        <li key={key}>
                            <RefinementOption option={option} section={section} refinements={refinements} setRefinements={setRefinements}>
                            </RefinementOption>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RefinementSection;