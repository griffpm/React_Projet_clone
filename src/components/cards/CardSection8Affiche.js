import React from 'react'

export default function CardSection8Affiche({img, title, text}) {
    return (
    <div id='CardSection8Affiche'>
        <img src={img} alt="" />
            <p>{title} <br /> <span>{text}</span> </p>
            
    </div>
    )
}
