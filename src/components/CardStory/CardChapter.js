import React from 'react'

export default function CardChapter({num, title, release}) {
  return (
    <div id='cardChapter'>
      <div id='CardChapter_content'>
        <p>{num}</p>
        <div>
        <h4>{title}</h4>
        <p><span>{release}</span> </p>
        </div>
      </div>
        
    </div>
  )
}
