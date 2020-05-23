import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Story from "../components/Story"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage className="bgImage"
      fluid={props.data.indexPage.childImageSharp.fluid} >
      <h1 className="title text-uppercase">Leaf && Chino</h1>
      <div className="overlay">
        <h2 className="slogan text-white">Aroma.. Sabor.. Placer..</h2>
      </div>
    </BackgroundImage>
    <Story />
  </Layout>
)

export default IndexPage

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