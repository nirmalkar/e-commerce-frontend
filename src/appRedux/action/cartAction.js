import axios from "axios";
import { CART_ADD_ITEM } from "../../constants/actionTypes/index";

const addToCart = (productId, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      ` http://localhost:4000/api/products/${productId}`
    );
    console.log("object");
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
  } catch (err) {}
};

export { addToCart };
