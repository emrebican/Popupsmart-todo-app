import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../features/todosSlice";

import { userNamePass } from "../../utilities/userNamePass";

const UserValidation = () => {
  const [userName, setUserName] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("User_Name", JSON.stringify(userName));
  }, [userName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userNamePass(userName))
      dispatch(getUser({ login: true, name: userName }));

    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name please..."
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button>Go</button>
    </form>
  );
};

export default UserValidation;
