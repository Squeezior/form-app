import SearchBar from "./SearchBar";
import Card from "./UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  // const searchList = props.users;

  // let filteredList = props.userList.filter((user) =>
  //   user.name.match(searchInput)
  // );
  // props.onFilter(filteredList, searchInput);

  // const test = (filteredList, searchInput) => {
  //   searchInput.length > 0
  //     ? filteredList.map((user) => (
  //         <li key={user.id}>
  //           {user.name} {user.age}
  //         </li>
  //       ))
  //     : searchList.map((user) => (
  //         <li key={user.id}>
  //           {user.name} {user.age}
  //         </li>
  //       ));
  // };
  const filteredList = (searchInput) => {
    let test =
      searchInput.length > 0 &&
      props.users.filter((user) => user.name.match(searchInput));
    console.log(test);
  };

  return (
    <Card className={styles.users}>
      <SearchBar onFilter={filteredList} />
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.age}
          </li>
        ))}
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
