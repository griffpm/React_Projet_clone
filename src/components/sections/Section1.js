import React from 'react'
import CardContenantSection1 from '../cards/CardContenantSection1'
import CardContenuSection1 from '../cards/CardContenuSection1'
import '../css/section1.css';

export default function Section1() {
  return (
    <div id='section1'>
      <div id='section1_content'>
        <CardContenantSection1 
          title="Weekly Book"
          children={<img src="img/600.jpg"/>}>
        </CardContenantSection1>
        
        
        <CardContenantSection1 title="Meet Webnovel">
          <CardContenuSection1 title="Author Benefit" text="Create a new book and get your bonus" image="img/800.png"/>
          <CardContenuSection1 title="Webnovel Fanfic Gallery" text="Get lost in the world of fanfiction and let your imagination run wild." image="img/1000.jpg"/>
          <CardContenuSection1 title="More novel and bonus" text="Download the App to get coins, FP, badges, and frames!" image="img/400.jpg"/>
        </CardContenantSection1>
      </div>
    </div>
  )
}
