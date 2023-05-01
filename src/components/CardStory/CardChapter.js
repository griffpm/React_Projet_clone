import React from 'react'

export default function CardChapter({num, title, release}) {
  return (
    <div>
        <p>{num}</p>
        <div>
        <h4>{title}</h4>
        <p>{release}</p>
        </div>
    </div>
  )
}
