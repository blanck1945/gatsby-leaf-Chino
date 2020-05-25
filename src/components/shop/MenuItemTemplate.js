import React from 'react'


const MenuItemTemplate = ({ data }) => {

    return (
        <div className="itemBox">
            <div className="menuDrink">
                <h2 className="drinkTitle">{data.node.title}</h2>
                <p className="price">${data.node.price}</p>
            </div>
            <div className="menuDesc">
                <p>{data.node.description.description}</p>
                <div className="addBox">
                    <button
                        className="chartBtn"></button>
                </div>
            </div> </div>)
}

export default MenuItemTemplate

/*
                    <Img fluid={data.node.image.fixed} className="imgMenu" />
*/
