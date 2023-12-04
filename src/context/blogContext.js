import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/blogReducer";

const BlogContext = createContext();


const API ="http://localhost:8001/blog"

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
};

const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBlogs = async (url) => {
    dispatch({ type: "SET_BLOGS_LOADINGS" });
    try {
      const res = await axios.get(url);
      const blogs = await res.data;
      dispatch({ type: "SET_BLOGS_DATA", payload: blogs });
    } catch (error) {
      dispatch({ type: "SET_BLOGS_ERROR" });
    }
  };

  useEffect(() => {
    getBlogs(API);
  }, []);
  return (
    <BlogContext.Provider value={{ ...state }}>{children}</BlogContext.Provider>
  );
};

// custom hook

const useBlogContext = () => {
  return useContext(BlogContext);
};

export { BlogContextProvider, useBlogContext };
