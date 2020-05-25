import React, { useState } from 'react'
import FilterBtn from './FilterBtn'
import MenuItemTemplate from "../components/shop/MenuItemTemplate"

import "../Css/Menu.scss"
import "../Css/filterBtn.css"

const Menu = ({ data }) => {

    const [displayList, setDisplayList] = useState(data.edges.map((el, index) =>
        <MenuItemTemplate key={index} data={el} />))

    const handlerFilter = name => {
        if (name === "all") {
            return setDisplayList(data.edges.map(el =>
                <MenuItemTemplate key={el.id} data={el} />))
        }
        const filterList = data.edges.filter(el => el.node.category === name)
        setDisplayList(filterList.map(el =>
            <MenuItemTemplate key={el.id} data={el} />))
    }

    return (
        <div className="menuBox">
            <div className="multi-button">
                <FilterBtn header={"All"} func={handlerFilter} name={"all"} />
                <FilterBtn header={"Coffe"} func={handlerFilter} name={"coffe"} />
                <FilterBtn header={"Tea"} func={handlerFilter} name={"tea"} />
                <FilterBtn header={"Juice"} func={handlerFilter} name={"juice"} />
            </div>
            <div className="menuBody">
                {displayList}
            </div>
        </div>
    )
}

export default Menu
