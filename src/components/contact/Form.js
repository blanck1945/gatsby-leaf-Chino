import React from 'react'

import "../../Css/Form.scss"

const Form = () => {

    const options = ["Leo Dicaprio", "Ana de Armas"]
    const random = Math.floor(Math.random() * 2) + 1

    return (
        <div className="formCon">
            <div className="formBox">
                <div className="invite">
                    <div className="overlay">

                    </div>
                </div>
                <form className="form"
                    action="https://formspree.io/leafandchino1945@gmail.com"
                    method="POST">
                    <label htmlFor="name" className="labelForm">Name</label>
                    <input type="text"
                        className="inputForm"
                        name="name"
                        id="name"
                        placeholder={random === 1 ? options[0] + ".." : options[1] + ".."} />
                    <label htmlFor="email" className="labelForm">Email</label>
                    <input type="text"
                        className="inputForm"
                        name="email"
                        id="email"
                        placeholder={random === 1 ? options[0] + "@gmail.com" : options[1] + "@gmail.com"} />
                    <label htmlFor="msg" className="labelForm">Your Msg</label>
                    <textarea className="textForm"
                        name="msg" id="msg" cols="30" rows="10"></textarea>
                    <button className="btnForm">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Form
