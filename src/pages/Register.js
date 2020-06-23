import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import propTypes from "prop-types";

import { registerUser } from "../appRedux/action/userAction";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [name, setName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const userRegistration = useSelector((state) => state.userRegistration);
  const { loading, regUserInfo, error } = userRegistration;

  console.log(userRegistration);
  const dispatch = useDispatch();

  useEffect(() => {
    if (regUserInfo) {
      props.history.push("/");
    }
  }, [regUserInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, regEmail, regPassword));
  };
  return (
    <section className="hero is-fullheight">
      {loading && <div>Loading</div>}
      {error && <div>{error}</div>}
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={submitHandler}>
                    <div className="field">
                      <label className="label" htmlFor="name">
                        Name
                      </label>
                      <div className="control">
                        <input
                          required
                          value={name}
                          className="input"
                          name="name"
                          type="text"
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="regEmail">
                        Name
                      </label>
                      <div className="control">
                        <input
                          required
                          value={regEmail}
                          className="input"
                          name="regEmail"
                          type="email"
                          placeholder="Email"
                          onChange={(e) => setRegEmail(e.target.value)}
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
                          name="regPassword"
                          value={regPassword}
                          className="input"
                          type="password"
                          placeholder="password"
                          onChange={(e) => setRegPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <button className="button  is-primary is-light is-fullwidth">
                      Register
                    </button>
                    Already have an account?<Link to="/signin">Sign-In</Link>
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

Register.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
};
export default Register;
