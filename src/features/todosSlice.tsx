import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoState, UserInterface } from "../interfaces/interfaces";
import getLocalStorage from "../utilities/getLocalStorage";

const TODOS_URL = "https://630df577b37c364eb70fbb2c.mockapi.io/api/v1/todos";

// Initial State
const initialState: TodoState = {
  todos: [],
  themeColor: false,
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
    return response.data;
  }
);

// delete todo
export const deleteTodo: any = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    const response = await axios.delete(TODOS_URL + `/${id}`);
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
