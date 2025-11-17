import React from 'react'




function HomeSectionCarousel() {

   const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };


    return (
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        responsive={responsive}
      />
    );
}



export default HomeSectionCarousel