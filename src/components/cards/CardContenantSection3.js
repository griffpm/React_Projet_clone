import React from 'react'

export default function CardContenantSection3({image, children, title}) {
  return (
    <div id='card6'>
        <div id='card6_title'>
            <img src={image} alt="" />
            <p>{title}</p>  
        </div>
        <div id='children'>
        {children}
        </div>
        
    </div>
  )
}
