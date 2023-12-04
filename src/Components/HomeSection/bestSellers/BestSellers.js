import React from "react";
import Cards from "./Cards";
import "./BestSellers.css";

const BestSellers = () => {
  return (
    <>
      <div className="heading">
        <h1>BEST SELLERS</h1>
        <div className="line"></div>
      </div>
      <section className="popular ">
        <div className="full_container">
          <div className="content">
            <Cards />
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellers;
