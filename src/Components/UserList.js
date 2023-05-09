import { useState } from "react";

import SearchBar from "./SearchBar";
import Card from "./UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const [searchInput, setSearchInput] = useState("");

  let filteredUsers =
    searchInput.length > 0
      ? props.users
          .filter((user) => user.name.toLowerCase().match(searchInput))
          .map((user) => (
            <li key={user.id}>
              {user.name} {user.age}
            </li>
          ))
      : props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.age}
          </li>
        ));

  return (
    <Card className={styles.users}>
      <SearchBar setSearchState={setSearchInput} />
      <ul>
        {filteredUsers}
        {/* {filteredList.map((user) => (
          <li key={user.id}>
            {user.name} {user.age}
          </li>
        ))} */}
      </ul>
    </Card>
  );
};

export default UserList;
