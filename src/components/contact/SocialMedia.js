import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"



import "../../Css/SocialBtn.scss"

const SocialMedia = () => {
    return (
        <div className="socialMedia">
            <h3 className="socialTitle">Seguinos en nuestras redes sociales</h3>
            <div className="socialBar">
                <FaFacebook className="socialIcon fac" />
                <FaInstagram className="socialIcon ins" />
                <FaTwitter className="socialIcon tw" />
            </div>
        </div>
    )
}

export default SocialMedia
