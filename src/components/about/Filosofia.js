import React from 'react'
import { aboutText } from "../../Utils/AboutText"
import TextFilo from './TextFilo'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'

import "../../Css/Filosofia.scss"

const Filosofia = () => {

  const data = useStaticQuery(graphql`
  query{
    coffe: file(relativePath: { eq: "coffePlace.jpg"}){
      childImageSharp {
        fluid(maxWidth: 1800, quality:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  const textDisplay = aboutText.map((el, index) =>
    <TextFilo header={el.header} text={el.text} key={el.index} />)

  return (
    <div className="filosofia">
      <div className="filoText">
        {textDisplay}
      </div>
      <div className="photoFilo">
        <Img fluid={data.coffe.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default Filosofia
