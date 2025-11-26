import React from 'react'
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';



function HomeSectionCarousel() {

  const responsive = {
      0: { items: 1 },
      600: { items: 2 },
      900: { items: 3 },
      1200: { items: 4 },
  };

    const items = [1,1,1,1,1].map((item)=> <HomeSectionCard/>)

    return (
      <div className='relative px-4 lg:px-8'>
      <div className='relative p-5'>
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          responsive={responsive}
        />
      </div>
      </div>
      
      
    );
}



export default HomeSectionCarousel