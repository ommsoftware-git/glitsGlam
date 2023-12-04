import React from "react";
import "./Review.css";
import { FaStar } from "react-icons/fa";

const Card = (props) => {
  return (
    <>
      <div className="box">
        <i className="fa fa-quote-left"></i>
        <div className="details flex ">
          <div className="img">
            <img src={props.profile} alt="" />
          </div>
          <div className="name">
            <h3>{props.name}</h3>
            <span>{props.post}</span>
          </div>
        </div>
        <div className="para">
          <p>{props.desc}</p>
        </div>
        <hr />
        <div className="review_start">
          <p>
            <FaStar className="icon_star"/>
            <FaStar className="icon_star"/>
            <FaStar className="icon_star"/>
            <FaStar className="icon_star"/>
            <FaStar className="icon_star"/>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
