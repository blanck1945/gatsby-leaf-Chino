import React from 'react'
import FilterBtn from './FilterBtn'
import ItemDisplay from './ItemDisplay'

import "../Css/Menu.scss"

const Menu = ({ data }) => {

    const display = data.edges.map((el, index) =>
        <div key={index} className="menuDrink">
            <img>{el.node.image.fixed.fluid}</img>
            <h2>{el.node.title}</h2>
            <p>{el.node.description.description}</p>
        </div>)

    return (
        <div className="menuBox">
            <div className="filterBox">
                <FilterBtn header={"All"} />
                <FilterBtn header={"Coffe"} />
                <FilterBtn header={"Tea"} />
                <FilterBtn header={"Juice"} />
            </div>
            <div className="menuBody">
                {display}
            </div>
        </div>
    )
}

export default Menu
