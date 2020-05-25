import React from 'react'
import CardDisplay from './productCard'

import "../../Css/Products.scss"

const Products = ({ data }) => {

    console.log(data)

    const productList = data.edges.map((el, index) =>
        <CardDisplay key={index} data={el.node} />)

    return (
        <div className="productBox">
            <h2 className="productTitle">Our Products</h2>
            <div className="productSpace">
                {productList}
            </div>
        </div>
    )
}

export default Products
