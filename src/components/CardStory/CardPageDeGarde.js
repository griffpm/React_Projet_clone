import React from 'react'
import '../css/Story.css'

export default function CardPageDeGarde({img, title, genre, NbCh, NbVue, author, rating}) {
  return (
    <div id='pagedegarde'>
        
            <div id='pdgImg'>
                <img src={img} alt="" />
            </div>
            <div id='pdgtext'>
                <h2>{title}</h2>
                <div id='pdgStats'>
                  <div>
                  <i class="fa-solid fa-memo"></i>
                    <p>{genre}</p>
                  </div>
                  <div>
                  <i class="fa-solid fa-file"></i>
                    <p>{NbCh} chapters</p>
                  </div>
                  <div>
                  <i class="fa-solid fa-eye"></i>
                    <p>{NbVue} views</p>
                  </div>
                </div>
                <p>Author: {author}</p>
                <div id='pdgRate'>
                <i class="fa-light fa-star"></i>
                <i class="fa-light fa-star"></i>
                <i class="fa-light fa-star"></i>
                <i class="fa-light fa-star"></i>
                <i class="fa-light fa-star"></i>
                <p>{rating}</p>
                </div>
                <div id='pdgButt'>
                  <button id='but1'>READ</button>
                  <button id='but2'>ADD TO LIBRARY</button>
                </div>
            </div>
        </div>
  )
}
