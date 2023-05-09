import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import { color } from '@mui/system';
import dataslider from './CarouselData';

function Carousel() {
  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className="h-full w-full">
      <Slider {...settings}>
        {dataslider?.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col bg-yellow-400 h-full w-full card"
            >
              <div className="shrink-0 card-top">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={500}
                  width={500}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
