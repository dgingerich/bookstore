import React, {useState} from 'react'

export const RefinementOption = ({option}) => {
    
    //Default is for all options to be available
    const [checked, setChecked] = useState(true);

    const handleOnChange = () => {
        setChecked(!checked);
    }

    return (
        <>
        <input type="checkbox" checked={checked} onChange={handleOnChange}/> {option}
        </>
    )
}

export default RefinementOption;