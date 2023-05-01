import React from 'react'

export default function CardContenuSection1({title, text, image}) {
    return (
    <div id='card3'>
        <div id='c3_text'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        <img src={image} alt="" />
    </div>
        
    )
}
