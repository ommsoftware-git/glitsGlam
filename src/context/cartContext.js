import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();


const getLocalCartData = () => {
  let localCartData = localStorage.getItem("localCartData");
  return JSON.parse(localCartData);
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  subtotalPrice:""
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (id, amount, cartData) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, cartData } });
  };

  const SetDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEMS", payload: id });
  };

  useEffect(() => {
    dispatch({type:"CART_SUBTOTAL_PRICE"})
    localStorage.setItem("localCartData", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, AddToCart, removeItem, SetDecrease, setIncrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

// custom hook
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
