const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_PRODUCT_DATA":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "SET_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
