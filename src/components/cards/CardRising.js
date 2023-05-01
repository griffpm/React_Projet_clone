import React from 'react'

export default function CardRising({image, title, genre}) {
  return (
    <div id='cardRising'>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <h3>{title}</h3>
            <p>{genre}</p>
            <div id='cardRising_butt'>
                <button>READ NOW</button>
                <img src="img/svgexport-14.svg" alt="add" />
            </div>
        </div>
    </div>
  )
}
