import React from "react";

const SearchBar = () => {
  return (
    <div className="field">
      <div className="control w-6 is-loading">
        <input className="input is-rounded" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
