import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../features/todosSlice";
import { showToast } from "../../utilities/showToast";
import { RootState } from "../../store";
import * as S from "./styled";

import { userNamePass } from "../../utilities/userNamePass";
import { ALERT_GET_USER } from "../constants/constant";

const UserValidation = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state: RootState) => state.todos.themeColor);
  const [userName, setUserName] = useState<string>("");

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
    <>
      <S.Title themeProp={themeColor}>Welcome to Todo App</S.Title>
      <S.FormWrapper themeProp={themeColor} onSubmit={handleSubmit}>
        <S.Input
          themeProp={themeColor}
          type="text"
          placeholder="Name please..."
          value={userName}
          onChange={(e: any) => setUserName(e.target.value)}
        />
        <S.Button themeProp={themeColor}>Go</S.Button>
      </S.FormWrapper>
    </>
  );
};

export default UserValidation;
