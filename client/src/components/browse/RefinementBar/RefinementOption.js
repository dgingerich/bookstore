import React, { useState, useEffect } from 'react';

import styles from './RefinementOption.module.css';

export const RefinementOption = ({ option, section, refinements, setRefinements }) => {

    //Default is for all options to be available
    const [checked, setChecked] = useState(refinements[section].find((obj) => obj === option) ? true : false);

    //Adds or removes value "option" from state element "section" in Browse
    const handleOnClick = () => {
        setRefinements((refinements) => {
            //refinementTypeArray is deep copy of value of refinementType in state
            let refinementTypeArray = [...refinements[section]];

            refinementTypeArray.indexOf(option) > -1
                ? refinementTypeArray.splice(refinementTypeArray.indexOf(option), 1)
                : refinementTypeArray.push(option);

            return { ...refinements, [section]: refinementTypeArray };
        });
    };

    //setRefinements is called inside useEffect so it is called on initialization
    //Also called every time checked changes, which occurs every time handleOnChange is called
    useEffect(() => {
        setChecked(refinements[section].find((obj) => obj === option) ? true : false)
    }, [refinements]);

    //If sectionChecked changes, toggle entire section to match sectionChecked

    return (
        <>
            <button className={styles.optionButton} onClick={handleOnClick}>
                <input className={styles.checkmark} type="checkbox" checked={checked} readOnly/>
                <div>{option}</div>
            </button>
        </>
    )
}

export default RefinementOption;