import React from 'react'

import "../Css/Banner.scss"

const Banner = ({ header }) => {
    return (
        <div className="banner">
            <h2 className="titleBanner">{header}</h2>
        </div>
    )
}

export default Banner
