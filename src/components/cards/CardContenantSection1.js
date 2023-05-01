import React from 'react'

export default function CardContenantSection1({title, children}) {
    return (
        <div id='card2'>
            <h2>{title}</h2>
            <div id='c2_img'>
                {children}
            </div>
        </div>
    )
}
