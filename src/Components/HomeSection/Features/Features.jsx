import React from "react";
import "../bestSellers/BestSellers.css";
import "./Features.css";
import Card from "./Card";
import Wdata from "./Wdata";

const Features = () => {
  return (
    <>
      <section className="popular works">
        <div className="container">
          <div className="heading">
            <h1>Our Features </h1>
            <div className="line"></div>
            <div className="row d-flex justify-content-center w-100 mt-3">
              <div className="col-lg-6">
                <div className="welcome-content">
                  <p>
                    It’s all about the organic and freshness here. it's all
                    about good food and good times. No one can defeat the taste
                    of Desi Cow Ghee, Buffalo Ghee, Organic Mustard Oil,
                    handmade Green chilli pickle,Kair Pickle and many more home
                    made items which comes directly from the farm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content grid">
            {Wdata.map((value, index) => {
              return (
                <Card
                  key={index}
                  cover={value.cover}
                  title={value.title}
                  desc={value.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
