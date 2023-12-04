import React from "react";
import "./MadIndia.css";

const MadIndia = () => {
  return (
    <>
      <section className="madIndia">
        <div className="container">
          <div className="heading">
            <h1>Featured on mad4india.com</h1>
            <div className="line"></div>
            <div className="row mt-5 w-100">
              <div className="col-lg-12 w-100">
                <figure>
                  <img
                    src="/images/mad4india.png"
                    alt="mad4india"
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="text-center mb-5">
            <a href="https://mad4india.com/business-innovation/a2-ghee-kasutam-journey/">
              <button className="primary-btn">Read More</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MadIndia;
