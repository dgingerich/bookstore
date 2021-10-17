import React, { useState } from 'react';
import RefinementOption from './RefinementOption';

export const RefinementSection = ({ sectionTitle, options }) => {
    //Takes title (eg. "Subgenre") and array of options for that section (eg. "["Mystery", "Romance", "Mythology"]")

    //Refinement options are visible when expanded
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <h3>{sectionTitle}</h3>
            <h3>{expanded ? '-' : '+'}</h3>
            <div>
                {options.map((option, key) => {
                    return <RefinementOption option={option} key={key}></RefinementOption>
                })}
            </div>
        </div>
    )
}

export default RefinementSection;