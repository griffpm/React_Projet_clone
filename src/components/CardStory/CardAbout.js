import React from 'react'
import CardTag from './CardTag'

export default function CardAbout({text}) {
  return (
    <div id='CardAbout'>
        <div id='Sy'>
            <h3>Synopsis</h3>
            <p>{text}</p>
        </div>
        <div id='Ta'>
            <h3>Tags</h3>
            <div id='tags'>
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
