import { useState } from "react";
import Card from "./UI/Card";
import "./SearchBar.module.css";

const SearchBar = (props) => {
  const inputChangeHandler = (e) => {
    e.preventDefault();
    props.setSearchState(e.target.value);
  };

  return (
    <div>
      <div>
        <ul></ul>
      </div>
      Search:{" "}
      <input
        name="query"
        type="text"
        placeholder="Search here"
        onChange={inputChangeHandler}
        value={props.searchInput}
      ></input>
    </div>
  );
};

export default SearchBar;
