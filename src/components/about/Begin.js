import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import "../../Css/Begin.scss"

const Begin = () => {

  const data = useStaticQuery(graphql`
    query{
      coffe: file(relativePath: { eq: "begin.jpg"}){
        childImageSharp {
          fluid(maxWidth: 1800, quality:100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      ideas: file(relativePath: { eq: "ideas.jpg"}){
        childImageSharp {
          fluid(maxWidth: 1800, quality:100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      build: file(relativePath: { eq: "build.jpg"}){
        childImageSharp {
          fluid(maxWidth: 1800, quality:100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="begin">
      <div className="beginBox">
        <Img fluid={data.coffe.childImageSharp.fluid} className="photoBegin" />
      </div>
      <h3 className="beginText">Begin</h3> (to)
      <div className="beginBox">
        <Img fluid={data.ideas.childImageSharp.fluid} className="photoBegin" />
      </div>
      <h3 className="beginText">Biuld</h3> (yours)
      <div className="beginBox">
        <Img fluid={data.build.childImageSharp.fluid} className="photoBegin" />
      </div>
      <h3 className="beginText">Ideas</h3>
    </div>
  )
}

export default Begin
