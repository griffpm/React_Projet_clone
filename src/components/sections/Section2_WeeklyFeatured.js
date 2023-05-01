import React from 'react'
import CardLeftSection2 from '../cards/CardLeftSection2'
import CardSmallRightSection2 from '../cards/CardSmallRightSection2'
import { dataCardSection2 } from '../datas/dataCardSection2'
import '../css/section2.css';


export default function Section2_WeeklyFeatured() {
  return (
    <div id='section2'>
        <div id='s2_content'>
        <h2>Weekly featured</h2>
        <div id='section2_content'>
            <div>
                <CardLeftSection2 
                    image="img/13.jpg" 
                    title="The imbecile Lord married to five beautifull godess" 
                    genre="Fantasy" 
                    author="Mohitkumar" 
                    text="In his first life, losing the one he loved the most, grief overshadowed his life until death knocked on his door.
                    He thought that he would finally be free from the nightmare but his life was far from over. 
                    He was reborn again."/>
            </div>
            <div id='s2-grid'>
                {dataCardSection2.map((item) => (
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
    </div>
  )
}
