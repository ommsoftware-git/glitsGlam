import React from "react";
import "./BottomBanner.css";
import {NavLink} from "react-router-dom"

const BottomBanner = () => {
  return (
    <>
      <section className="flex_space btn_banner_section">
        <div className="container-fluid">
          <div className="banner-content">
            <h1>A philosophy rooted in Interdependence</h1>
            <h5>
              ancient system of farming that still thrives in our villages
            </h5>
           <NavLink to="/contact"> 
           <button className=" primary-btn">Contact Us</button>
           </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomBanner;
