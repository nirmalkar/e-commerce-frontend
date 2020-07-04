import { SEARCH_PRODUCT } from "../../constants/actionTypes/searchActionTypes";

const searchProduct = (data) => (dispatch) => {
  dispatch({ type: SEARCH_PRODUCT, payload: data });
};

export { searchProduct };
