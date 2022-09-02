import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../features/todosSlice";
import { showToast } from "../../utilities/showToast";

import { userNamePass } from "../../utilities/userNamePass";
import { ALERT_GET_USER } from "../constants/constant";

const UserValidation = () => {
  const [userName, setUserName] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("User_Name", JSON.stringify(userName));
  }, [userName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    userNamePass(userName)
      ? dispatch(getUser({ login: true, name: userName }))
      : showToast(ALERT_GET_USER);
    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name please..."
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button>Go</button>
    </form>
  );
};

export default UserValidation;
