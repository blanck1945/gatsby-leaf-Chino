import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

import "../Css/Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyRights">
                <h3>© Leaf && Chino - 2020</h3>
            </div>
            <div className="socialIcons">
                <FaFacebook className="iconItem fac" />
                <FaInstagram className="iconItem ins" />
                <FaTwitter className="iconItem twi" />
            </div>
            <div className="credits">
                <h3>Coded By Okubo</h3>
            </div>
        </div>
    )
}

export default Footer
