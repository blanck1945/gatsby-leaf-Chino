import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Filosofia from "../components/about/Filosofia"
import ShopIndex from "../components/index/shopIndex"
import { data } from "../Utils/indexData"
import Begin from "../components/about/Begin"
import Founders from "../components/about/Founders"
import Banner from "../components/Banner"


const about = (props) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage className="about"
        fluid={props.data.indexPage.childImageSharp.fluid} >
        <h1 className="title">Leaf && Chino</h1>
        <div className="overlay about">
          <h2 className="slogan">Nuestra Historia</h2>
        </div>
      </BackgroundImage>
      <ShopIndex data={data[2]} />
      <Filosofia />
      <Begin />
      <Banner header={"Our Founders"} />
      <Founders />
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