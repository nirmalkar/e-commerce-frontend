import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {};
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={submitHandler}>
                    <div className="field">
                      <label className="label">Name</label>
                      <div className="control">
                        <input
                          required
                          value={email}
                          className="input"
                          type="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Name</label>
                      <div className="control">
                        <input
                          required
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
export default SignIn;
