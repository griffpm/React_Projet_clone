import React from 'react'
import { dataTag } from '../datas/dataTag'
import CardTag from '../cards/CardTag'
import '../css/section4.css';

export default function Section4_TopFanficTags() {
    return (
    <div id='section4'>
        <h2>Top Fanfic Tag</h2>
        <div id='section4_content'>
            
                {dataTag.map((item)=>(
                    <CardTag 
                        key={item.id}
                        id={item.id}
                        tag={item.tag}
                        />
                ))}
            
        </div>

    </div>
    )
}
