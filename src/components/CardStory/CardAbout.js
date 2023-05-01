import React from 'react'
import CardTag from './CardTag'

export default function CardAbout({text}) {
  return (
    <div>
        <div>
            <h3>Synopsis</h3>
            <p>{text}</p>
        </div>
        <div>
            <h3>Tags</h3>
            <div>
                <CardTag tag="HAREM" />
                <CardTag tag="ACTION" />
                <CardTag tag="ADVENTURE" />
                <CardTag tag="WEAKTOSTRONG" />
                <CardTag tag="OVERPOWERED" />    
            </div>
        </div>
        

    </div>
  )
}
