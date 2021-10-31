import React from 'react';

import styles from './RefinementBar.module.css';
import RefinementSection from './RefinementSection';

export const RefinementBar = ( {refinements, setRefinements} ) => {

    return (
        <div className={styles.refinementBarContainer}>
            <h2>Genre</h2>
            <RefinementSection sectionTitle="Fiction" section="fictionSubgenres" refinements={refinements} setRefinements={setRefinements}></RefinementSection>
            <RefinementSection sectionTitle="Nonfiction" section="nonfictionSubgenres" refinements={refinements} setRefinements={setRefinements}></RefinementSection>
        </div>
    )
}

export default RefinementBar;