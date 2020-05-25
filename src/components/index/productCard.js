import React from 'react'
import Img from "gatsby-image"
import "../../Css/ProductCard.scss"

const CardDisplay = ({ data }) => {

    const {
        id,
        title,
        price,
        image
    } = data

    return (
        <div className="productCard">
            <div className="imageBox">
                <Img fluid={image.fluid} className="imageP" />
            </div>
            <div className="bodyBox">
                <h6 className="addTitle">{title}</h6>
                <div className="addBox">
                    <h6 className="addPrice">${price}</h6>
                    <button
                        className="addBtn snipcart-add-item"
                        data-item-id={id}
                        data-item-price={price}
                        data-item-url="https://leafandchino.netlify.app/shop"
                        data-item-image={image.fluid.src}
                        data-item-name={title}>Add to Chart</button>
                </div>
            </div>
        </div>
    )
}

export default CardDisplay
