import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import Menu from "../components/Menu"

const Shop = ({ data }) => {

  const { menu } = data

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage className="about"
        fluid={data.indexPage.childImageSharp.fluid} >
        <h1 className="title ">Leaf && Chino</h1>
        <div className="overlay about">
          <h2 className="slogan ">Nuestros Productos</h2>
        </div>
      </BackgroundImage>
      <Banner header={"Menu"} />
      <Menu data={menu} />
    </Layout>
  )
}

export default Shop

export const pageQuery = graphql`
  query{
    indexPage: file(relativePath: { eq: "coffeShop.jpg"}){
      childImageSharp {
        fluid(maxWidth: 1800, quality:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu:allContentfulCoffeItem{
      edges{
        node{
          id
          title
          description{
            description
          }
          price
          category
        }
      }
  }
}

`;

/*
image{
            fixed(width:50, height:50){
              ...GatsbyContentfulFixed_tracedSVG
            }*/