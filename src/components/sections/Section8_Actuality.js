import React from 'react'
import { dataCardSection8img } from '../datas/dataCardSection8img'
import Card_img from '../cards/Card_img'
import CardRising from '../cards/CardRising'
import CardCheering from '../cards/CardCheering'
import { dataSection8Cheering } from '../datas/dataSection8Cheering copy'
import { dataSection8Cheering2 } from '../datas/dataSection8Cheering2'
import CardSection8Affiche from '../cards/CardSection8Affiche'
import '../css/section8.css';

export default function Section8_Actuality() {
  return (
    <div id='Section8'>
        <div id='s8_content'>
            <div id='section8_content'>
                <div id='Section8_rising'>
                    <h2>Rising Fictions</h2>
                    <div id='s8_rising_all_cards'>
                        <div id='section8_cards_img'>
                            {dataCardSection8img.map((item)=>(
                                <Card_img
                                    key={item.id}
                                    id={item.id}
                                    image={item.image} />
                            ))}
                        </div>
                        <div id='s8_cardfree'>
                            <CardRising
                                image="img/151.jpg"
                                title="I'm Spiderman"
                                genre="Fantasy"
                                />
                        </div>
                    </div>
                </div>
                <div id='section8_cheering'>
                    <h2>Cheering Reads</h2>
                    <div id='cheeringCards'>
                        <div id='cheeringCards1'>
                            {dataSection8Cheering.map((item)=>(
                                <CardCheering
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title} 
                                    genre={item.genre} 
                                    />
                            ))}
                        </div>
                        <div id='cheeringCards2'>
                            {dataSection8Cheering2.map((item)=>(
                                <CardCheering
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title} 
                                    genre={item.genre} 
                                    />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div id='section8_content2' >
                <CardSection8Affiche img="img/banniere1.jpg" title="Original Stories" text="A Webnovel site for everyone" />
                <CardSection8Affiche img="img/banniere2.jpg" title="Becoming an author" text="Whrite novels. Get paid" />
                <CardSection8Affiche img="img/banniere3.jpg" title="Book of Authors" text="A guide on how to become a popular author" />
            </div>

            <div id='section8_content'>
                <div id='Section8_rising'>
                    <h2>New Arrivals</h2>
                    <div id='s8_rising_all_cards'>
                        <div id='section8_cards_img'>
                            {dataCardSection8img.map((item)=>(
                                <Card_img
                                    key={item.id}
                                    id={item.id}
                                    image={item.image} />
                            ))}
                        </div>
                        <div id='s8_cardfree'>
                            <CardRising
                                image="img/151.jpg"
                                title="I'm Spiderman"
                                genre="Fantasy"
                                />
                        </div>
                    </div>
                </div>
                <div id='section8_cheering'>
                    <h2>Editor's Choice</h2>
                    <div id='cheeringCards'>
                        <div id='cheeringCards1'>
                            {dataSection8Cheering.map((item)=>(
                                <CardCheering
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title} 
                                    genre={item.genre} 
                                    />
                            ))}
                        </div>
                        <div id='cheeringCards2'>
                            {dataSection8Cheering2.map((item)=>(
                                <CardCheering
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title} 
                                    genre={item.genre} 
                                    />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )}