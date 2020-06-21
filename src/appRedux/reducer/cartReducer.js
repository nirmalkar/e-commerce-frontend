const {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} = require("../../constants/actionTypes");

function cartReducer(state = { cartItems: [] }, action) {
  const item = action.payload;
  let product;
  switch (action.type) {
    case CART_ADD_ITEM:
      product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? item : x
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    default:
      return state;
  }
}
export { cartReducer };
