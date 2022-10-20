import React, { Fragment, useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  function addUserHandler(name, age) {
    setUsers((prevState) => [
      ...prevState,
      { name: name, age: age, id: Math.random().toString() },
    ]);
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </Fragment>
  );
}

export default App;
