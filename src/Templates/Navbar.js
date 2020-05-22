import React, { useState } from 'react'
import Logo from "../images/coffe.svg"
import { Link } from "gatsby"
import { navLinks } from "../Utils/NavbarLinks"
import { FaCartArrowDown } from "react-icons/fa"

import "../Css/Navbar.css"
import "../Css/bootstrap.min.css"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const navDisplay = navLinks.map((el, index) =>
        <li key={index} className="nav-item">
            <Link to={el.path} className="nav-link text-capitalize">
                {el.text}
            </Link>
        </li>)

    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <Link to="/" className="navbar-brand">
                <img src={Logo} alt="Logo/Author:mangsaab" className="icon-small" />
                {/* https://www.iconfinder.com/mangsaab author=mangsaab*/}
            </Link>
            <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
                <span className="navbar-toggler-icon" />
            </button>
            <div className={open ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                <ul className="navbar-nav mx-auto">
                    {navDisplay}
                    <li className="nav-item ml-sm-5">
                        <FaCartArrowDown className="cart-icon" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

//collpase navbar-collapse