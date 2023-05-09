import { useState } from "react";
import Card from "./UI/Card";
import "./SearchBar.module.css";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  props.onFilter(searchInput);

  //   props.onFilter(searchInput);

  //   userList.map((user) => (
  //     <li key={user.id}>
  //       {user.name} {user.age}
  //     </li>
  //   ));

  return (
    <Card>
      <div>
        <ul></ul>
      </div>
      Search:{" "}
      <input
        name="query"
        type="text"
        placeholder="Search here"
        onChange={inputChangeHandler}
        value={searchInput}
      ></input>
      {
        // <ul>
        //   {searchInput.length > 0
        //     ? filteredList.map((user) => (
        //         <li key={user.id}>
        //           {user.name} {user.age}
        //         </li>
        //       ))
        //     : userList.map((user) => (
        //         <li key={user.id}>
        //           {user.name} {user.age}
        //         </li>
        //       ))}
        // </ul>
      }
    </Card>
  );
};

export default SearchBar;
