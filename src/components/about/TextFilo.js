import React from 'react'

const TextFilo = ({ header, text }) => {
    return (
        <div className="filoItem">
            <h3 className="titleFilo">{header}</h3>
            <p className="paraFilo">{text}</p>
        </div>
    )
}

export default TextFilo
