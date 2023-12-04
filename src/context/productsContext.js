import { createContext, useContext } from "react";
import axios from "axios";
import { useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const ProductContext = createContext();

const API = "http://localhost:8000/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    dispatch({ type: "SET_PRODUCT_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_PRODUCT_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "SET_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

// custom Hook
const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContextProvider, useProductContext };
