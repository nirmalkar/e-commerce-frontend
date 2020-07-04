import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  productListReducer,
  productDetailsReducer,
  addProductReducer,
  productDeleteReducer,
} from "../reducer/productReducer";
import { cartReducer } from "../reducer/cartReducer";
import { userSignInReducer, userRegisterReducer } from "../reducer/userReducer";
import { searchReducer } from "../reducer/searchReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} },
  userSignIn: { userInfo },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userSignIn: userSignInReducer,
  userRegistration: userRegisterReducer,
  cart: cartReducer,
  productAdd: addProductReducer,
  productDelete: productDeleteReducer,
  productSearch: searchReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
