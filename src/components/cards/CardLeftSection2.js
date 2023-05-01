import React from 'react'

export default function CardLeftSection2({image, title, genre, author, text}) {
    return (
    <div>
        <div id='card4_img'>
            <img src={image} alt="" />
        </div>
        <div id='card4_text'>
            <h3>{title}</h3>
            <p>{genre} - {author}</p>
            <p>{text}</p>
        </div>
    </div>
    )
}
