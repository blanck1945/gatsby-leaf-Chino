import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Story from "../components/Story"


const about = (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage className="about"
        fluid={props.data.indexPage.childImageSharp.fluid} >
        <h1 className="title text-uppercase">Leaf && Chino</h1>
        <div className="overlay about">
          <h2 className="slogan text-white">Sobre Nosotros</h2>
        </div>
      </BackgroundImage>
      <Story />
    </Layout>
  )
}

export default about

export const pageQuery = graphql`
  query{
    indexPage: file(relativePath: { eq: "about.jpeg"}){
      childImageSharp {
        fluid(maxWidth: 1800, quality:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;