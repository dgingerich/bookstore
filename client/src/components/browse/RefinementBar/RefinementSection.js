import React, { useState } from 'react';
import RefinementOption from './RefinementOption';

import styles from './RefinementSection.module.css';

export const RefinementSection = ({ sectionTitle, section, options, toggleActive }) => {
    //Takes title (eg. "Subgenre") and array of options for that section (eg. "["Mystery", "Romance", "Mythology"]")

    //Refinement options are visible when expanded
    const [expanded, setExpanded] = useState(true);

    //Toggling checked sets all sub options equal to checked
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <div className={styles.header}>
                <button onClick={() => setChecked(!checked)} className={styles.sectionTitle}>
                    <input className={styles.checkmark} type="checkbox" checked={checked}/> 
                    {sectionTitle}
                </button>

                <button className={styles.expandedIndicator} onClick={() => setExpanded(!expanded)}>{expanded ? '-' : '+'}</button>
            </div>
            <ul style={{ display: `${expanded ? 'inline-block' : 'none'}`}}>
                {options.map((option, key) => {
                    return <li key={key}><RefinementOption option={option} section={section} sectionChecked={checked} toggleActive={toggleActive}></RefinementOption></li>
                })}
            </ul>
        </div>
    )
}

export default RefinementSection;