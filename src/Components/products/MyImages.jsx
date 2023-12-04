import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const MyImages = ({ img =[{url:""}] }) => {

  console.log(img)

  return (
    <>
      <figure>
        <img src={img[0].url} alt="product-details-img" className="img-fluid" />
      </figure>
    </>
  );
};

export default MyImages;
