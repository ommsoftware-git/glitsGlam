import React from "react";
import { FaLeaf, FaHome, FaMicroscope } from "react-icons/fa";
import { ImLab } from "react-icons/im";

import "./Products.css";

const ProductsShortsImages = () => {
  return (
    <>
      <section>
        
          <div className="shortImgMainDiv w-100">
            <div className="shortImgDiv">
              <div className="shortImgIcon">
                <FaLeaf className="shortIcon" />
              </div>
              <p>100% natural</p>
            </div>

            <div className="shortImgDiv">
              <div className="shortImgIcon">
                <ImLab className="shortIcon" />
              </div>
              <p>No added chemicals</p>
            </div>
            <div className="shortImgDiv">
              <div className="shortImgIcon">
                <FaHome className="shortIcon" />
              </div>
              <p>Fssai approved</p>
            </div>
            <div className="shortImgDiv">
              <div className="shortImgIcon">
                <FaMicroscope className="shortIcon" />
              </div>
              <p>Lab-tested</p>
            </div>
          </div>
        
      </section>
    </>
  );
};

export default ProductsShortsImages;
