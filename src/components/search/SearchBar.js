import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { searchProduct } from "../../appRedux/action/searchAction";
import { useInputState } from "../../hooks/useInputState";

const SearchBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useInputState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchProduct(search));
    history.push(`/products/`);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="field">
        <div className="control w-24 is-loading has-icons-left">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-search" />
          </span>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
