import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RingCategories = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  const goToPrev = () => {
    console.log("Going to previous slide");
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    console.log("Going to next slide");
    sliderRef.current.slickNext();
  };

  return (
    <div className="slider-container">
      <button className="custom-btn prev-btn" onClick={goToPrev}>{'<'}</button>
      <Slider ref={sliderRef} {...settings}>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/toe-rings.jpg?v=1705749057" alt="" />
        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/toe-rings.jpg?v=1705749057" alt="" />
        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/toe-rings.jpg?v=1705749057" alt="" />
        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/toe-rings.jpg?v=1705749057" alt="" />
        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/toe-rings.jpg?v=1705749057" alt="" />
        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/toe-rings.jpg?v=1705749057" alt="" />
        </div>
      </Slider>
      <button className="custom-btn next-btn" onClick={goToNext}>{'>'}</button>
    </div>
  );
}

export default RingCategories;
