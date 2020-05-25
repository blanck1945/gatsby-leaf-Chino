import React from 'react'
import { Link } from 'gatsby'
import "../../Css/Story.scss"


const ShopIndex = ({ data }) => {

    const {
        header,
        text,
        path,
        btn,
        style,
        sign
    } = data

    const signDisplay = sign.map((el, index) =>
        <h2 className="signHeader" key={index}>{el}</h2>)

    return (
        <div className={style}>
            <div className="storySpace">
                <h2 className="storyTitle">{header}</h2>
                <p className="storyPara">{text}</p>
                <Link to={path} className="link">
                    <button className="storyBtn">{btn}</button>
                </Link>
            </div>
            <div className="storySpace">
                {signDisplay}
            </div>
        </div>
    )
}

export default ShopIndex
