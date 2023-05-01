import React from 'react'
import { dataTag2 } from '../datas/dataTag2'
import '../css/section4.css';
import CardTag from '../cards/CardTag';

export default function Section10_PopularTag() {
    return (
    <div id='section4'>
        <h2>Popular Tag</h2>
        <div id='section4_content'>
            
                {dataTag2.map((item)=>(
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
