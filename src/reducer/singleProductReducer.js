const singleProductReducer = (state, action) => {
    switch (action.type) {
      case "SET_SINGLE_PRODUCT_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
  
      case "SET_SINGLE_PRODUCT_DATA":
        return {
          ...state,
          isSingleLoading: false,
          singleProduct: action.payload,
        };
  
      case "SET_PRODUCT_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isSingleError: true,
        };
  
      default:
        return state;
    }
  };
  
  export default singleProductReducer;
  