import React from 'react'

export default function CardSmallRightSection2({image, title, genre}) {
  return (
    <div id='card5'>
      <div>
          <img src={image} alt="" />
          <div>
              <h3>{title}</h3>
              <p>{genre}</p>
          </div>
      </div>
    </div>
  )
}
