import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Story from "../components/Story"

const Contact = (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage className="about"
        fluid={props.data.indexPage.childImageSharp.fluid} >
        <h1 className="title text-uppercase">Leaf && Chino</h1>
        <div className="overlay about">
          <h2 className="slogan text-white">Cuentanos que piensas sobre nosotros</h2>
        </div>
      </BackgroundImage>
      <Story />
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