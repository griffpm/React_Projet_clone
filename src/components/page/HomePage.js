import React from 'react'
import Section1 from '../sections/Section1'
import Section2_WeeklyFeatured from '../sections/Section2_WeeklyFeatured'
import Section3_TopFanfic from '../sections/Section3_TopFanfic'
import Section4_TopFanficTags from '../sections/Section4_TopFanficTags'
import Section5_Limited from '../sections/Section5_Limited'
import Section6_Ranking from '../sections/Section6_Ranking'
import Section7_PotentialStarlet from '../sections/Section7_PotentialStarlet'
import Section8_Actuality from '../sections/Section8_Actuality'
import Section9_Completed from '../sections/Section9_Completed'
import Section10_PopularTag from '../sections/Section10_PopularTag'





export default function HomePage() {
    return (
    
        <div>
            <Section1 />
            <Section2_WeeklyFeatured />
            <Section3_TopFanfic />
            <Section4_TopFanficTags />
            <Section5_Limited />
            <Section6_Ranking />
            <Section7_PotentialStarlet />
            <Section8_Actuality />
            <Section9_Completed/>
            <Section10_PopularTag />
        </div>
    
    )
}
