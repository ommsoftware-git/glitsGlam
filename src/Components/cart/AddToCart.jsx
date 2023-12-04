import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import "./AddToCart.css";
import { useCartContext } from "../../context/cartContext";

const AddToCart = ({ cartData }) => {
  const { id } = cartData;
  const { AddToCart } = useCartContext();

  const [amount, setAmount] = useState(1);

  const SetDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < 5 ? setAmount(amount + 1) : setAmount(1);
  };

  const notify = () => {
    toast.success("Cart Added Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <div className="qty">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="qty-container">
              <button
                className="qty-btn-minus btn-primary btn-rounded mr-1"
                type="button"
                onClick={SetDecrease}
              >
                <i className="fa fa-chevron-left"></i>
              </button>
              <input
                type="text"
                name="qty"
                value={amount}
                className="input-qty input-rounded"
              />
              <button
                className="qty-btn-plus btn-primary btn-rounded ml-1"
                type="button"
                onClick={setIncrease}
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="btn_add">
          <NavLink
            to="/start-checkout"
            className="primary-btn mx-2 rounded-pill"
          >
            Buy Now
          </NavLink>
          <button
            className="primary-btn mx-2 rounded-pill"
            onClick={() => {
              AddToCart(id, amount, cartData);
              notify();
            }}
          >
            Add To Cart
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AddToCart;
