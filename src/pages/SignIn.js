import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import propTypes from "prop-types";

import { signIn } from "../appRedux/action/userAction";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignIn = useSelector((state) => state.userSignIn);
  const { loading, userInfo, error } = userSignIn;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  return (
    <section className="hero is-fullheight">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={submitHandler}>
                    <div className="field">
                      <label className="label" htmlFor="email">
                        Name
                      </label>
                      <div className="control">
                        <input
                          required
                          value={email}
                          className="input"
                          name="email"
                          type="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                      <div className="control">
                        <input
                          required
                          name="password"
                          value={password}
                          className="input"
                          type="password"
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <button className="button  is-primary is-light is-fullwidth">
                      Sign In
                    </button>
                    Do not have an account?
                    <Link
                      to={
                        redirect === "/"
                          ? "/register"
                          : `register?redirect=${redirect}`
                      }
                    >
                      Register
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SignIn.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
  location: propTypes.shape({
    search: propTypes.func.isRequired,
  }),
};
export default SignIn;
