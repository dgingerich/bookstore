import React, { useState, useEffect } from 'react';

import styles from './RefinementOption.module.css';

export const RefinementOption = ({ option, section, sectionChecked, toggleActive }) => {

    //Default is for all options to be available
    const [checked, setChecked] = useState(true);

    //Adds or removes value "option" from state element "section" in Browse
    const handleOnChange = () => {
        setChecked(!checked);
    };

    //toggleActive is called inside useEffect so it is called on initialization
    //Also called every time checked changes, which occurs every time handleOnChange is called
    useEffect(() => {
        toggleActive(section, option);
    }, [checked]);

    //If sectionChecked changes, toggle entire section to match sectionChecked
    useEffect(() => {
        if (sectionChecked != checked) {
            handleOnChange();
        }
    }, [sectionChecked]);

    return (
        <>
            <button className={styles.optionButton} onClick={handleOnChange}>
                <input className={styles.checkmark} type="checkbox" checked={checked} />
                {option}
            </button>
        </>
    )
}

export default RefinementOption;