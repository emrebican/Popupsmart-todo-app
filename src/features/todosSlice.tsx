import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TodoState, UserInterface } from "../interfaces/interfaces";
import { getLocalStorage, getLocalTheme } from "../utilities/getLocalStorage";
import { ALERT_DELETED, ALERT_ADDED, TODOS_URL } from "../constants/constant";
import { showToast } from "../utilities/showToast";

// Initial State
const initialState: TodoState = {
  todos: [],
  themeColor: getLocalTheme ? getLocalTheme : false,
  user: {
    login: getLocalStorage ? true : false,
    name: getLocalStorage ? getLocalStorage : null,
  },
};

// fetch todos
export const fetchTodos: any = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await axios.get(TODOS_URL);
    return [...response.data];
  }
);

// post todo
export const addNewTodo: any = createAsyncThunk(
  "todos/addNewTodo",
  async (initialTodo) => {
    const response = await axios.post(TODOS_URL, initialTodo);
    showToast(ALERT_ADDED);
    return response.data;
  }
);

// delete todo
export const deleteTodo: any = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    const response = await axios.delete(TODOS_URL + `/${id}`);
    showToast(ALERT_DELETED);
    return response.data;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<UserInterface>) => {
      state.user = {
        login: action.payload.login,
        name: action.payload.name,
      };
    },
    themeToggle: (state) => {
      state.themeColor = !state.themeColor;
    },
  },
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
    },
    [addNewTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.todos.filter((todo: any) => todo.id !== action.payload.id);
    },
  },
});

export const { getUser, themeToggle } = todosSlice.actions;

export default todosSlice.reducer;
