import axios from "axios";
const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} = require("../../constants/actionTypes");

const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:4000/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: err.message });
  }
};

const addProduct = (product) => async (dispatch, getState) => {
  const {
    userSignIn: { userInfo },
  } = getState();
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST, payload: product });
    if (!product._id) {
      const { data } = await axios.post(
        "http://localhost:4000/api/products",
        product,
        {
          headers: {
            Authorization: "Bearer" + userInfo.token,
          },
        }
      );
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        `http://localhost:4000/api/products/${product._id}`,
        product,
        {
          headers: {
            Authorization: "Bearer" + userInfo.token,
          },
        }
      );
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error.message });
  }
};

const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get(
      `http://localhost:4000/api/products/${productId}`
    );
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: err.message });
  }
};
const deleteProduct = (productId) => async (dispatch, getState) => {
  const {
    userSignIn: { userInfo },
  } = getState();
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
    const { data } = await axios.delete(
      `http://localhost:4000/api/products/${productId}`,
      {
        headers: {
          Authorization: "Bearer" + userInfo.token,
        },
      }
    );
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
  } catch (err) {
    console.log("here");
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: err.message });
  }
};
export { listProducts, detailsProduct, addProduct, deleteProduct };
