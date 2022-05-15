import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../src/images/banner/banner1.jpg';
import banner2 from '../../../src/images/banner/banner2.jpg';
import banner3 from '../../../src/images/banner/banner3.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
            
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;