import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";
import { useState } from "react";

const ProductCartSlide = (curElem) => {
  const { id, image, discountTitle, name, price, delPrice } = curElem;
  const { AddToCart } = useCartContext();

  const [amount, setAmount] = useState(1);
  console.log(setAmount);

  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <div className="cards bestSellerCard">
        <div className="item">
          <Link to={`product-detail/${id}`}>
            <div className="product_wrap">
              <div className="image">
                <img src={image[0].url} alt="name" />
                <div className="img_offer">
                  <p>{discountTitle}</p>
                </div>
              </div>
              <div className="details">
                <h2>{name}</h2>
                <h3>
                  ₹ {price}
                  <sub>
                    <del> ₹ {delPrice}</del>
                  </sub>
                </h3>
              </div>
            </div>
          </Link>

          <div className="add_to_cart text-center">
            <button
              className="primary-btn"
              onClick={() => {
                AddToCart(id, amount, curElem);
                notify();
              }}
            >
              Add To Cart
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCartSlide;
