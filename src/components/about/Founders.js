import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { bio } from "../../Utils/bio"

import "../../Css/Founder.scss"

const Founders = () => {

    const data = useStaticQuery(graphql`
  query{
    vane: file(relativePath: { eq: "vane.jpg"}){
      childImageSharp {
        fluid(maxWidth: 1800, quality:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    eddy: file(relativePath: { eq: "Eddy.jpg"}){
        childImageSharp {
          fluid(maxWidth: 1800, quality:100){
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`)



    return (
        <>
            <div className="conta">
                <div className="photoFou">
                    <Img fluid={data.vane.childImageSharp.fluid} />
                </div>
                <div className="bio">
                    <div className="bioUp">
                        <h3 className="bioTitle">Jane Douglass</h3>
                        <h4 className=" quote">"El cafe es genesis de la acción"</h4>
                    </div>
                    <p className="bioPara">{bio[0]}</p>
                </div>
            </div>
            <div className="conta">
                <div className="photoFou">
                    <Img fluid={data.eddy.childImageSharp.fluid} />
                </div>
                <div className="bio">
                    <div className="bioUp">
                        <h3 className="bioTitle">Eddy Smith</h3>
                        <h4 className=" quote">"Sabor, olor y placer"</h4>
                    </div>
                    <p className="bioPara">{bio[1]}</p>
                </div>
            </div>
        </>
    )
}

export default Founders
