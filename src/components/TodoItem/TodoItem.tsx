import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";

import { fetchTodos, deleteTodo } from "../../features/todosSlice";
import { todoTitlePass } from "../../utilities/userNamePass";
import UseTimeAgo from "../../hooks/useTimeAgo";
import { showToast } from "../../utilities/showToast";

import { MockInterface } from "../../interfaces/interfaces";

const alert = "Need to type more than 3 letters!";

const TodoItem = ({ title, date, edit, isCompleted, id }: MockInterface) => {
  const dispatch = useDispatch();
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
    } else if (isCompleted) {
      const alert = "Todo is already completed";
      showToast(alert);
    } else {
      showToast(alert);
    }

    await dispatch(fetchTodos());
  };

  useEffect(() => {
    setEditTodo(title);
    inputRef.current?.focus();
  }, [edit]);

  return (
    <div>
      <form onSubmit={handleEdit}>
        {edit && !isCompleted ? (
          <input
            type="text"
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : (
          <h2>{title}</h2>
        )}
      </form>
      <h3>{isCompleted ? "true" : "false"}</h3>
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleComplete}>complete</button>
      <button onClick={handleEdit}>edit</button>
      <UseTimeAgo timestamp={date} />
    </div>
  );
};

export default TodoItem;
