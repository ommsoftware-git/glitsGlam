import React from "react";
import "./Vlog.css";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import { useBlogContext } from "../../context/blogContext";

const Vlog = () => {
  const { blogs } = useBlogContext();

  return (
    <>
      <section className="popular vlog mb-5">
        <div className="container">
          <div className="heading">
            <h1>Our vlog's </h1>
            <div className="line"></div>
          </div>
          <div className="content grid">
            {blogs.map((curElem) => {
              return <Card key={curElem.id} {...curElem} />;
            })}
          </div>
          <div className="text-center">
            <NavLink to="/blogs">
              <button className="primary-btn">View More</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vlog;
