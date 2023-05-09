import { useState } from "react";
import UserList from "./Components/UserList";
import AddUser from "./Components/AddUser";
import "./App.css";

const App = () => {
  const [userList, setUserList] = useState([]);

  const AddUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: userName,
          age: userAge,
          id: (Math.random() + Math.random()).toString(),
        },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
