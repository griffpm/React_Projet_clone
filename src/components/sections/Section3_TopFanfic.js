import React from 'react'
import { dataCardSection3 } from '../datas/dataCardSection3'
import CardContenantSection3 from '../cards/CardContenantSection3'
import CardContenuSection3 from '../cards/CardContenuSection3'
import '../css/section3.css';


export default function Section3_TopFanfic() {
    return (
    <div id='section3'>
        <div id='s3_content'>
        
            <h2>Top Fanfic Books</h2>
            
            <div id='section3_content'>
                <CardContenantSection3 
                image="img/section_3_title.svg"
                title="Power Ranking">
                    {
                    dataCardSection3.map((item) => (
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
                    dataCardSection3.map((item) => (
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
                    dataCardSection3.map((item) => (
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
