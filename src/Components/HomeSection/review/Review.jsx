import React from "react";
import "./Review.css";
import Tdata from "./Tdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const Review = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoPlay: true,
  autoPlaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="popular works Testimonial mb-5">
        <div className="container">
          <div className="heading">
            <h1>Customer Review </h1>
            <div className="line"></div>
            <div className="row d-flex justify-content-center w-100 mt-3">
              <div className="col-lg-6">
                <div className="welcome-content">
                  <p>
                  Why Should you make Kasutam products part of your daily life ? See what people are saying .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Slider {...settings}>
            {Tdata.map((value, index) => {
              return (
                <Card
                  key={index}
                  desc={value.desc}
                  name={value.name}
                  profile={value.profile}
                  post={value.post}
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Review;
