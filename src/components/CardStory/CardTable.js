import React from 'react'
import { DataCardChapter } from '../datas/DataCardChapter'
import CardChapter from './CardChapter'

export default function CardTable() {
  return (
    <div id='CardTable'>
        <h3><span>Last Realease :</span> Chapter 03</h3>
        <div id='listeChapter'>
        {DataCardChapter.map((item)=>(
            <CardChapter
                key={item.id}
                id={item.id}
                num={item.num}
                title={item.title}
                release={item.release}
            />
        ))}
        </div>
    </div>
  )
}
