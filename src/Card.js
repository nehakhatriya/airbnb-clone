import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <img src={props.src} alt="" />
            <div className="card_info">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default Card
