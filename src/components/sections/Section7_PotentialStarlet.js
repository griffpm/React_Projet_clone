import React from 'react'
import { dataCardSection7 } from '../datas/dataCardSection7'
import CardSmallRightSection2 from '../cards/CardSmallRightSection2'
import '../css/section7.css';

export default function Section7_PotentialStarlet() {
    return (
    <div id='section7'>
        <div id='section7_content'>
        <h2>Potential Starlet</h2>
        <div id='section7cards'>
        {dataCardSection7.map((item) => (
                    <CardSmallRightSection2
                        key={item.id}
                        image={item.image}
                        title={item.title} 
                        genre={item.genre}
                        id={item.id}
                        
                        />
    ))}
        </div>
        </div>
    </div>
    )
}
