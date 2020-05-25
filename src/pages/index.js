import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShopIndex from "../components/index/shopIndex"
import { data } from "../Utils/indexData"

import "../Css/BackgroundImage.scss"

const IndexPage = (props) => {

  const display = data.map(el =>
    <ShopIndex data={el} key={el.id} />
  )

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage className="bgImage"
        fluid={props.data.indexPage.childImageSharp.fluid} >
        <h1 className="title">Leaf && Chino</h1>
        <div className="overlay">
          <h2 className="slogan">Aroma.. Sabor.. Placer..</h2>
        </div>
      </BackgroundImage>
      {display}
    </Layout>
  )
}

export default IndexPage

/*
 <div className="socialIcons">
                <FaFacebook className="socialLinks fac" />
                <FaInstagram className="socialLinks ins" />
                <FaTwitter className="socialLinks twi" />
            </div>*/

export const pageQuery = graphql`
  query{
    indexPage: file(relativePath: { eq: "coffeBg.jpeg"}){
      childImageSharp {
        fluid(maxWidth: 1800, quality:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;