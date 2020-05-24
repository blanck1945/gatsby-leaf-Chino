import React from 'react'
import { Link } from 'gatsby'
import "../Css/Story.scss"

const Story = () => {
    return (
        <div className="story" >
            <h2 className="storyTitle">Nuestra historia</h2>
            <p className="storyPara">Todo empezo hace 3 años con un cafe de por medio. Nuestros dos fundadores tomaron la desición de revolucionar
            la industria del cafe. Amantes del cafe y entusiastas de sus distintas variedades vierón un vacio que podian llenar
            asi en una tarde lluviosa y gris nacio con el nombre de "Leaf && Chino" una forma artesanal de disfrutas y
            compartir el cafe. Conoce nuestra historia y te invitamos a ser parte de nuestra comunidad</p>
            <Link to="/about" className="link">
                <button className="storyBtn">Sobre Nosotros</button>
            </Link>
        </div>
    )
}

export default Story
