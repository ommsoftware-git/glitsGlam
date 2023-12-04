const blogReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS_LOADINGS":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_BLOGS_DATA":
      return {
        ...state,
        isLoading: false,
        blogs: action.payload,
      };

    case "SET_BLOGS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default blogReducer;
