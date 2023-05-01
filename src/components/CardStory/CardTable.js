import React from 'react'
import { DataCardChapter } from '../datas/DataCardChapter'

export default function CardTable() {
  return (
    <div id='CardTable'>
        <h3><span>Last Realease :</span> Chapter 03</h3>
        <div id='listeChapter'></div>
        {DataCardChapter.map((item)=>(
            <DataCardChapter
                key={item.id}
                id={item.id}
                num={item.num}
                title={item.title}
                release={item.release}
            />
        ))}
    </div>
  )
}
