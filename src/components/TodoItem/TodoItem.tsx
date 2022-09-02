import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { RootState } from "../../store";
import * as S from "./styled";

import { RiDeleteBack2Fill } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

import {
  ALERT_COMPLETE,
  ALERT_3_LETTER,
  ALERT_EDITED,
} from "../../constants/constant";
import { fetchTodos, deleteTodo } from "../../features/todosSlice";
import { todoTitlePass } from "../../utilities/userNamePass";
import UseTimeAgo from "../../hooks/useTimeAgo";
import { showToast } from "../../utilities/showToast";
import { MockInterface } from "../../interfaces/interfaces";

const TodoItem = ({ title, date, edit, isCompleted, id }: MockInterface) => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state: RootState) => state.todos.themeColor);
  const inputRef = useRef<HTMLInputElement>(null);
  const [editTodo, setEditTodo] = useState<string>(title);

  const handleDelete = async () => {
    await dispatch(deleteTodo(id));
    await dispatch(fetchTodos());
  };

  const handleComplete = async () => {
    const complete = { isCompleted: !isCompleted, edit: false };
    await axios.put(
      `https://630df577b37c364eb70fbb2c.mockapi.io/api/v1/todos/${id}`,
      complete
    );
    await dispatch(fetchTodos());
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    const editing = { title: editTodo, edit: !edit };

    if (!isCompleted && todoTitlePass(editTodo)) {
      await axios.put(
        `https://630df577b37c364eb70fbb2c.mockapi.io/api/v1/todos/${id}`,
        editing
      );
      showToast(ALERT_EDITED);
      await dispatch(fetchTodos());
    } else if (isCompleted) {
      showToast(ALERT_COMPLETE);
    } else {
      showToast(ALERT_3_LETTER);
    }
  };

  useEffect(() => {
    setEditTodo(title);
    inputRef.current?.focus();
    // eslint-disable-next-line
  }, [edit]);

  return (
    <S.ItemWrapper
      themeProp={themeColor}
      completeProp={isCompleted}
      style={{ backgroundColor: isCompleted && "#00695c" }}
    >
      <S.FormWrapper>
        <form onSubmit={handleEdit}>
          {edit && !isCompleted ? (
            <S.Input
              themeProp={themeColor}
              type="text"
              ref={inputRef}
              value={editTodo}
              onChange={(e: any) => setEditTodo(e.target.value)}
            />
          ) : (
            <S.Title>{title}</S.Title>
          )}
        </form>
        <UseTimeAgo timestamp={date} />
      </S.FormWrapper>
      <S.ButtonWrapper>
        <S.Button themeProp={themeColor} onClick={handleDelete}>
          <RiDeleteBack2Fill />
        </S.Button>
        <S.Button themeProp={themeColor} onClick={handleComplete}>
          <BsCheckLg />
        </S.Button>
        <S.Button themeProp={themeColor} onClick={handleEdit}>
          <FaEdit />
        </S.Button>
      </S.ButtonWrapper>
    </S.ItemWrapper>
  );
};

export default TodoItem;
