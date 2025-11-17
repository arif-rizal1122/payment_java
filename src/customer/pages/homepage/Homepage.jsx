import React from 'react'
import MainCarousel from '../../../homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../homeSectionCarousel/HomeSectionCarousel'


const Homepage = () => {
    return (
        <div>
            <MainCarousel/>
            <div>
                <HomeSectionCarousel/>
            </div>
        </div>
    )
}


export default Homepage