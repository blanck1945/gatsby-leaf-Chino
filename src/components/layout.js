/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "../Templates/Navbar"
import Footer from "../Templates/Footer"

import "./layout.css"
import "../Css/BackgroundImage.css"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

