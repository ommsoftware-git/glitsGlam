import React from "react";
import "./About.css";
import Certifications from "../certifications/Certifications";
import Business from "../business/Business";
import MadIndia from "../mad4india/MadIndia";

const About = () => {
  return (
    <>
      <section className="about flex_space mtop">
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-6">
              <figure>
                <img
                  src="./Images/about-us.jpeg"
                  alt="about-us"
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-lg-6">
              <h2>Mr Bhavesh Kumar ( CEO )</h2>
              <p style={{textAlign:"justify"}}>
                Meet our CEO- Mr Bhavesh Kumar, Kasutam began its unending
                pursuit of purity and love for organic products in the year
                2019. It is driven by the vision and the dynamism of its CEO Mr
                Bhavesh Kumar. He brings with him several years of experience.
                He envisaged making people understand the power of India’s
                ancient Vedic culture and how it can be incorporated into our
                daily eating habits. His fathomless interest in organic products
                and healthy living inspired him to make pure original products
                that are more inclined towards quality rather than just profit.
              </p>
              <a
                href="https://mad4india.com/business-innovation/a2-ghee-kasutam-journey/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="primary-btn">Read More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Certifications/>
      <Business/>
      <MadIndia/>
    </>
  );
};

export default About;
