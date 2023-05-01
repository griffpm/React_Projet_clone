import React from 'react'

export default function CardFree({image, title, category, rating, description}) {
    return (
    <div id='cardFree'>
        <div id='cardFree_img'>
            <img src={image} alt="" />
        </div>
        <div id='cardFree_text'>
            <h3>{title}</h3>
            <p>{category}</p>
            <div id='cardFree_rating'>
                <i class="fa-duotone fa-star fa-2xs"></i>
                <p>{rating}</p>
            </div>
            <div id='cardFree_description'>
                <p>{description}</p>
            </div>
            <div id='cardFree_button'>
                <button>READ NOW</button>
                <img src="img/svgexport-14.svg" alt="add" />
            </div>
        </div>
    </div>
    )
}
