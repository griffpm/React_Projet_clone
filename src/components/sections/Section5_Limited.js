import React from 'react'
import CardFree from '../cards/CardFree'
import '../css/section5.css';

export default function Section5_Limited() {
    return (
    <div id='section5'>
        <div id='section5_content'>
        <div id='section5_img'>
            <img src="img/300.png" alt="what's next?" />
        </div>
        <div id='section5_contenue'>
            <div id='section5_title'>
                <h2>Limited Free For You</h2>
                <p><span>00</span>D<span>06</span>H<span>56</span>M</p>
            </div>
            <div>
                <CardFree
                    image="img/156.jpg"
                    title="Sins Paradise: Domination System"
                    category="Fantasy"
                    rating="4.3"
                    description="Horizon Online. It was a death Virtual Reality MMORPG game where people had classes, hunted monsters, got riches, and fought similar players. I, the strongest player in Horizon Online"
                />
            </div>
        </div>
        </div>
    </div>
    )
}
