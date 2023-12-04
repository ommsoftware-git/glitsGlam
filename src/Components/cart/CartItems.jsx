import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const CartItems = ({ id, image, name, price, amount }) => {
  const { removeItem, SetDecrease, setIncrease } = useCartContext();

  const notify = () => {
    toast.error("Cart Remove Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <section className="totalCartItems">
        <div className="cartItemsSection">
          <div className="cartItemsImg">
            <NavLink to={`product-detail/${id}`}>
              <img src={image} alt={name} className="img-fluid" />
            </NavLink>
          </div>

          <div>
            <div className="cartItemName">
              <NavLink to={`product-detail/${id}`}>
                <h6>{name}</h6>
              </NavLink>
            </div>
            <div className="qty-container">
              <button
                className="qty-btn-minus btn-primary btn-rounded mr-1"
                type="button"
                onClick={() => SetDecrease(id)}
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
                onClick={() => setIncrease(id)}
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div>
            <div className="cartItemsDel">
              <button
                className="btn btn-light btn-sm"
                onClick={() => {
                  removeItem(id);
                  notify();
                }}
              >
                <FaTrash />
              </button>
            </div>
            <div className="cartItemsPrice">
              <h6>₹ {price * amount}</h6>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default CartItems;
