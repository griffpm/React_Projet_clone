import React from 'react'

export default function CardContenuSection3({image, classement, title, category, rating}) {
    return (
    <div id='card7'>
        <div id='card7_img'>
            <img src={image} alt="" />
        </div>
        <div id='card7_classement'>
            <p id='classement'>{classement}</p>
        </div>
        <div id='card7_text'>
            <h3>{title}</h3>
            <p>{category}</p>
            <div id='card7_rating'>
                <i class="fa-duotone fa-star fa-2xs"></i>
                <p>{rating}</p>
            </div>
        </div>
    </div>
    )
}
