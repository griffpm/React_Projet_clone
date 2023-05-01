import React from 'react'
import CardContenantSection3 from '../cards/CardContenantSection3'
import CardContenuSection3 from '../cards/CardContenuSection3'
import { dataCardSection6 } from '../datas/dataCardsection6'
import '../css/section6.css';



export default function Section6_Ranking() {
    return (
    <div id='section3'>
        <div id='s6_content'>
            <h2>Top Fanfic Books</h2>
            
            <div id='section3_content'>
                <CardContenantSection3 
                image="img/section_3_title.svg"
                title="Ranking">
                    {
                        dataCardSection6.map((item) => (
                            <CardContenuSection3
                                key={item.id}
                                id={item.id}
                                image={item.image} 
                                classement={item.classement} 
                                title={item.title} 
                                category={item.category} 
                                rating={item.rating}
                                />
                    ))}
                </CardContenantSection3>

                <CardContenantSection3 
                image="img/section_3_title.svg"
                title="Collection Ranking">
                    {
                        dataCardSection6.map((item) => (
                            <CardContenuSection3
                                key={item.id}
                                id={item.id}
                                image={item.image} 
                                classement={item.classement} 
                                title={item.title} 
                                category={item.category} 
                                rating={item.rating}
                                />
                    ))}
                </CardContenantSection3>

                <CardContenantSection3 
                image="img/section_3_title.svg"
                title="Active Ranking">
                    {
                        dataCardSection6.map((item) => (
                            <CardContenuSection3
                                key={item.id}
                                id={item.id}
                                image={item.image} 
                                classement={item.classement} 
                                title={item.title} 
                                category={item.category} 
                                rating={item.rating}
                                />
                    ))}
                </CardContenantSection3>
            </div>
        </div>
    </div>
    )
}
