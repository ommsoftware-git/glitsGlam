import { createContext, useEffect, useReducer, useContext } from "react";
import axios from "axios";
import reducer from "../reducer/singleBlogReducer";


const SingleBlogContext = createContext();

const API = "http://localhost:8001/blog";

const initialState = {
  isSingleLoading: false,
  isSingleError: false,
  singleBlog: {},
};

const SingleBlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getSingleBlog = async (url) => {
    dispatch({ type: "SET_SINGLE_BLOG_LOADING" });
    try {
      const res = await axios.get(url);
      const singleBlog = await res.data;
      dispatch({ type: "SET_SINGLE_BLOG_DATA", payload: singleBlog });
    } catch (error) {
      dispatch({ type: "SET_BLOG_ERROR" });
    }
  };

  useEffect(() => {
    getSingleBlog(API);
  }, []);

  return (
    <SingleBlogContext.Provider value={{ ...state, getSingleBlog }}>
      {children}
    </SingleBlogContext.Provider>
  );
};

// custom hook

const useSingleBlogContext = () => {
  return useContext(SingleBlogContext);
};

export { SingleBlogProvider, useSingleBlogContext };
