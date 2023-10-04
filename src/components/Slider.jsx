import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../assets/1.webp'
import Slide2 from '../assets/2.webp'
import Slide3 from '../assets/3.jpg'
import Slide4 from '../assets/4.webp'
import Slide5 from '../assets/5.webp'
import Slide6 from '../assets/6.webp'


const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img height={500} src={Slide1}></img>
      </Carousel.Item>
      <Carousel.Item>
        <img height={500}  src={Slide2}></img>
      </Carousel.Item>
      <Carousel.Item>
        <img height={500}  src={Slide3}></img>
      </Carousel.Item>
      <Carousel.Item>
        <img height={500}  src={Slide4}></img>
      </Carousel.Item>
      <Carousel.Item>
        <img height={500}  src={Slide5}></img>
      </Carousel.Item>
      <Carousel.Item>
        <img height={500}  src={Slide6}></img>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
