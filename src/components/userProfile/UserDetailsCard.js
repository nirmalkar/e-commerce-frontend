import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookie from "js-cookie";

import { getUserDetails } from "../../appRedux/action/userAction";

const UserDetailsCard = () => {
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector((state) => state.userData);
  const userId = JSON.parse(Cookie.get("userInfo"))._id;
  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, []);
  return (
    <section className="hero is-large">
      {loading ? "Loading" : ""}
      {error || ""}
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column is-8">
              <div className="card">
                <div className="card-content">
                  <div className="is-size-1">{userData && userData.name}</div>
                  <div className="is-5">{userData && userData.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetailsCard;
