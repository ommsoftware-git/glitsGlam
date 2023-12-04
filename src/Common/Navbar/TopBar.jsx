import React from "react";
import slideData from "./slideData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopBar = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoPlay: true,
    autoPlaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="top-bar ">
        <div className="container">
          <Slider {...settings}>
            {slideData.map((value, index) => {
              return <p key={index} className="text-white text-center">{value.title}</p>;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TopBar;
