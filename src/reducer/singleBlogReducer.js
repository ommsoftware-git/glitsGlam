const singleBlogReducer = (state, action) => {
  switch (action.type) {
    case "SET_SINGLE_BLOG_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_BLOG_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleBlog: action.payload,
      };

    case "SET_BLOG_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isSingleError: true,
      };

    default:
      return state;
  }
};

export default singleBlogReducer;
