import React from 'react'
import { dataCardSection9 } from '../datas/dataCardSection9'
import CardSmallRightSection2 from '../cards/CardSmallRightSection2'
import '../css/section6.css';

export default function Section9_Completed() {
    return (
    <div id='section7'>
        <div id='section7_content'>
        <h2>Completed Novels</h2>
        <div id='section7cards'>
        {dataCardSection9.map((item) => (
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
