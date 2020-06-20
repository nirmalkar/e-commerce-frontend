const { CART_ADD_ITEM } = require("../../constants/actionTypes");

function cartReducer(state = { cartItems: [] }, action) {
  const item = action.payload;
  const product = state.cartItems.find((x) => x.product === item.product);
  switch (action.type) {
    case CART_ADD_ITEM:
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? product : x
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
}
export { cartReducer };
