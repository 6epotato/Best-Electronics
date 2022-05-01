import React from 'react';
import headphone from '../Images/BannerImage/headphone.jpg'
import phones from '../Images/BannerImage/phones.jpg'
import computer from '../Images/BannerImage/computer.jpg'
import laptop from '../Images/BannerImage/laptop.jpg'
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block banner-img"
      src={headphone}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>HeadPhones</h3>
      <p>All kind of headphones are here</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block banner-img "
      src={phones}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Phones</h3>
      <p>Phones are also available here</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block  banner-img"
      src={computer}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Computer</h3>
      <p>Here there are some computer accessories are also available</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block banner-img"
      src={laptop}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Laptop</h3>
      <p>In this inventory there are laptops are also available</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;