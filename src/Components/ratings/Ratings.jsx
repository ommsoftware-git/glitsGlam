import React from "react";
import "./Ratings.css"
import { FaStar,FaStarHalf  } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";

const Ratings = ({stars,reviews}) => {
  const ratingsStars = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="rating_icon"/>
        ) : stars >= number ? (
          <FaStarHalf className="rating_icon"/>
        ) : (
          <AiOutlineStar className="text-warning" />
        )}
      </span>
    );
  });

  return (
    <>
      {ratingsStars}
      <p>({reviews}  reviews)</p>
    </>
  );
};
export default Ratings;
