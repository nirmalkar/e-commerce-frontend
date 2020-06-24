import Cookie from "js-cookie";
import axios from "axios";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
} from "../../constants/actionTypes";

const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/users/signin",
      { email, password }
    );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};
const registerUser = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_REGISTRATION_REQUEST,
    payload: { name, email, password },
  });
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/users/register",
      {
        name,
        email,
        password,
      }
    );
    console.log(data);
    dispatch({ type: USER_REGISTRATION_SUCCESS, payload: data });
    Cookie.set("useInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTRATION_FAIL, payload: error.message });
  }
};
export { signIn, registerUser };
