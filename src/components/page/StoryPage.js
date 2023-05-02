import React, { useState } from 'react'
import CardPageDeGarde from '../CardStory/CardPageDeGarde'
import CardAbout from '../CardStory/CardAbout'
import CardTable from '../CardStory/CardTable'

export default function StoryPage() {


  return (
    <div id='storyPage_content'>
        <div id='story_content'>
          <CardPageDeGarde
            img="img/6000.jpg"
            title="Dimensional Chat Group: I Am The Grandson Of The One Above All"
            genre="Anime & Comics"
            NbCh="103"
            NbVue="1.05M"
            author="Phelio"
            rating="4.85"
          />
    </div>
    <div id='story_content2'>
      <div id='AboutOrTable'>
          <h2 id='about'><a href="">About</a> </h2>
          <h2>|</h2>
          <h2 id='table'><a href="">Table of content</a> </h2>
      </div>
    </div>
        
    <div id='story_content3'>
      <div id='content1'>
        <CardAbout
          text="Sullivan Morningstar, the son of Lucifer Morningstar, the grandson of one above all, He was born mortal and will become the successor of his grandfather but before that he need to know what he's going to do first through multiverse."
        />
      </div>
      <div id='content2'>
          <CardTable />
      </div>
    </div>
          
        </div>
      
    

  )
}
