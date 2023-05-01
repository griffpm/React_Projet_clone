import React from 'react'

export default function CardCheering({image, title, genre}) {
  return (
    <div id='cardCheering'>
        <div id='cardCheering_img'>
            <img src={image} alt="" />
        </div>
        <div id='cardCheering_text'>
            <h3>{title}</h3>
            <p>{genre}</p>
        </div>
    </div>
  )
}
