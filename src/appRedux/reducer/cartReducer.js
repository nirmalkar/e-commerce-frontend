const {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING_ADDR,
  SAVE_PAYMENT,
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
    case SAVE_SHIPPING_ADDR:
      return { ...state, shipping: action.payload };
    case SAVE_PAYMENT:
      return { ...state, payment: action.payload };
    default:
      return state;
  }
}
export { cartReducer };
