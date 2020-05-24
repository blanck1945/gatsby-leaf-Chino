import React from 'react'

const FilterBtn = ({ header, func, name }) => {
    return (
        <>
            <button className="filterBtn" name={name}
                onClick={() => func(name)}
            >{header}</button>
        </>
    )
}

export default FilterBtn
