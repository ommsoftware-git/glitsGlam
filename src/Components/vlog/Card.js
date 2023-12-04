import React from "react";
import { NavLink } from "react-router-dom";

const Card = (curElem) => {
  const { id, title, cover } = curElem;
  return (
    <>
      <NavLink to={`/blog-details/${id}`}>
        <div className="box">
          <div className="img">
            <img src={cover} alt="cover-img" />
          </div>
          <div className="details">
            <h2>{title}</h2>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
