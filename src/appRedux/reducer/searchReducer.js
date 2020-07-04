import { SEARCH_PRODUCT } from "../../constants/actionTypes/searchActionTypes";

function searchReducer(state = { searchVal: "" }, action) {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return { searchVal: action.payload };
    default:
      return state;
  }
}

export { searchReducer };
