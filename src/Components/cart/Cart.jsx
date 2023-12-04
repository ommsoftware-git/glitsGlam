import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartItems from "./CartItems";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const Cart = () => {
  const { cart, subtotalPrice } = useCartContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow} className="relative">
        <AddShoppingCartIcon color="action" />
        <Badge bg="primary" style={{ position: "absolute", top: "30px" }}>
          {cart.length}
        </Badge>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="bg-light">
          <Offcanvas.Title>
            SHOPPING BAG <Badge bg="secondary"> {cart.length}</Badge>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cardSection">
            {cart.map((curElm) => {
              return <CartItems key={curElm.id} {...curElm} />;
            })}
          </div>
          {/* subtotal */}
          <div className="subTotalSection">
            <div>
              <h5>Subtotal</h5>
            </div>
            <div>
              <h5>₹ {subtotalPrice}</h5>
            </div>
          </div>

          {/* checkout */}
          <div className="mt-4 mb-4">
            <NavLink to="start-checkout">
              <button className="primary-btn">Checkout</button>
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
