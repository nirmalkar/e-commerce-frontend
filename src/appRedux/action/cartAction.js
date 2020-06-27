import axios from "axios";
import Cookie from "js-cookie";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING_ADDR,
  SAVE_PAYMENT,
} from "../../constants/actionTypes/index";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      ` http://localhost:4000/api/products/${productId}`
    );
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (err) {}
};
const removeItemFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};

const saveShippingAddr = (data) => (dispatch) => {
  dispatch({ type: SAVE_SHIPPING_ADDR, payload: data });
};
const savePayment = (data) => (dispatch) => {
  dispatch({ type: SAVE_PAYMENT, payload: data });
};

export { addToCart, removeItemFromCart, saveShippingAddr, savePayment };
