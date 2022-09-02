import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import * as S from "./styled";

import { addNewTodo } from "../../features/todosSlice";
import { todoTitlePass } from "../../utilities/userNamePass";
import { showToast } from "../../utilities/showToast";
import { TodoInterface } from "../../interfaces/interfaces";
import { ALERT_3_LETTER, TODO_DATE } from "../../constants/constant";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state: RootState) => state.todos.themeColor);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const content: TodoInterface = {
      title: inputValue,
      edit: false,
      date: TODO_DATE,
    };

    todoTitlePass(inputValue)
      ? dispatch(addNewTodo(content))
      : showToast(ALERT_3_LETTER);

    setInputValue("");
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder="Type something to do..."
        value={inputValue}
        onChange={(e: any) => setInputValue(e.target.value)}
      />
      <S.Button type="submit" themeProp={themeColor}>
        Add
      </S.Button>
    </S.FormWrapper>
  );
};

export default TodoAdd;
