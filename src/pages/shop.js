import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/index/Products"

import "../Css/BackgroundImage.scss"

const Shop = ({ data }) => {

  const { products } = data

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
      <Products data={products} />
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
  products:allContentfulCoffeProduct{
    edges{
      node{
        id
        title
        price
        image{
          fluid(maxHeight:350){
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
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