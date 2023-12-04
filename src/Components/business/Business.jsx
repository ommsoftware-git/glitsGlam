import React from "react";
import "./Business.css";

const Business = () => {
  return (
    <>
      <section className="certifications">
        <div className="container">
          <div className="heading">
            <h1>Featured on insider business. </h1>
            <div className="line"></div>
            <div className="row mt-5 w-100">
              <div className="col-lg-6">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/KMR-UwDcPnA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-lg-6 text-start">
                <h4 className="text-primary">
                  #SoExpensive #InsiderBusiness #Ghee
                </h4>
                <h4>
                  Why Bilona Ghee (A2 Desi Ghee) Is So Expensive | So Expensive
                  Food | Insider Business
                </h4>
                <p>
                  Bilona ghee is ghee that’s hand-churned from the milk of
                  native South Asian cows. Whereas factory-made ghee sells in
                  India for around 585 rupees per kilogram, bilona ghee can cost
                  up to 1,900 rupees per kilogram — over three times as much.
                  Compared to industrial ghee, it takes much longer to make, but
                  the end product is nuttier and more aromatic. Outside of
                  India, it can sell for over $100 per kilogram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
