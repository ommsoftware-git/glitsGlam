const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, amount, cartData } = action.payload;

      //   tackle existing items
      let existingCartItems = state.cart.find((curElm) => curElm.id === id);
      if (existingCartItems) {
        let updatedProducts = state.cart.map((curElm) => {
          if (curElm.id === id) {
            let newAmount = curElm.amount + amount;
            if (newAmount >= 5) {
              newAmount = 5;
            }
            return {
              ...curElm,
              amount: newAmount,
            };
          } else {
            return curElm;
          }
        });
        return {
          ...state,
          cart: updatedProducts,
        };
      } else {
        let cartProducts = {
          id,
          name: cartData.name,
          image: cartData.image[0].url,
          price: cartData.price,
          amount,
        };
        return {
          ...state,
          cart: [...state.cart, cartProducts],
        };
      }

    case "SET_DECREMENT":
      const updatedProducts = state.cart.map((curElm) => {
        if (curElm.id === action.payload) {
          let newDecrAmount = curElm.amount - 1;
          if (newDecrAmount <= 1) {
            newDecrAmount = 1;
          }
          return {
            ...curElm,
            amount: newDecrAmount,
          };
        } else {
          return curElm;
        }
      });
      return {
        ...state,
        cart: updatedProducts,
      };

    case "SET_INCREMENT":
      const updatedInProducts = state.cart.map((curElm) => {
        if (curElm.id === action.payload) {
          let newIncrAmount = curElm.amount + 1;
          if (newIncrAmount >= 5) {
            newIncrAmount = 5;
          }
          return {
            ...curElm,
            amount: newIncrAmount,
          };
        } else {
          return curElm;
        }
      });
      return {
        ...state,
        cart: updatedInProducts,
      };

    case "CART_SUBTOTAL_PRICE":
      let totalPrice = state.cart.reduce((initialVal, curElem) => {
        let { price, amount } = curElem;
        initialVal = initialVal + price * amount;
        return initialVal;
      }, 0);
      return {
        ...state,
        subtotalPrice: totalPrice,
      };

    case "REMOVE_ITEMS":
      let updateItems = state.cart.filter(
        (curElem) => curElem.id !== action.payload
      );
      return {
        ...state,
        cart: updateItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
