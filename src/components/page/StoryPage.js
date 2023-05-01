import React from 'react'
import CardPageDeGarde from '../CardStory/CardPageDeGarde'
import CardAbout from '../CardStory/CardAbout'

export default function StoryPage() {
  return (
    <div>
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

        <div>
          <h2>About</h2>
          <h2>|</h2>
          <h2>Table of content</h2>
        </div>

        <div>
          <CardAbout
            text="Sullivan Morningstar, the son of Lucifer Morningstar, the grandson of one above all, He was born mortal and will become the successor of his grandfather but before that he need to know what he's going to do first through multiverse."
            />
        </div>
        <div>
          {/* {contenue2} */}
        </div>
        
      </div>

  )
}
