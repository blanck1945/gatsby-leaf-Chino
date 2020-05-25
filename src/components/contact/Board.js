import React from 'react'
import { msg } from "../../Utils/clientMsg"
import "../../Css/Board.scss"
import "../../Css/ClientMsg.css"

const Board = () => {

    const clientMsg = msg.map((el, index) =>
        <div className="bodyDiv" key={index}>
            <div className="container">
                <div className="card">
                    <h3 className="title">{el.author}</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <p className="clientMsg">{el.msg}</p>
                        <h6 className="clientMsg">Opinion: <span className="score">{el.score}</span></h6>
                    </div>
                </div>
            </div>
        </div>)

    return (
        <div className="board">
            {clientMsg}
        </div>
    )
}

export default Board

/*
 <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50" />
                        </svg>*/
