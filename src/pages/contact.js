import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Board from "../components/contact/Board"
import Banner from "../components/Banner"

const Contact = (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage className="about"
        fluid={props.data.indexPage.childImageSharp.fluid} >
        <h1 className="title">Leaf && Chino</h1>
        <div className="overlay about">
          <h2 className="slogan">Cuentanos que piensas sobre nosotros</h2>
        </div>
      </BackgroundImage>
      <Banner header={"Our Costumers"} />
      <Board />
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query{
    indexPage: file(relativePath: { eq: "grap.jpg"}){
      childImageSharp {
        fluid(maxWidth: 1800, quality:100){
          ...GatsbyImageSharpFluid
        }
      }
    } 
  }
`;