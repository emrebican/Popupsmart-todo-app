import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoState, UserInterface } from "../interfaces/interfaces";
import getLocalStorage from "../utilities/getLocalStorage";

const TODOS_URL = "https://630df577b37c364eb70fbb2c.mockapi.io/api/v1/todos";

// Initial State
const initialState: TodoState = {
  todos: [],
  user: {
    login: getLocalStorage ? true : false,
    name: getLocalStorage ? getLocalStorage : null,
  },
  loading: false,
  error_message: "",
};

// Thunk
// fetch todos
export const fetchTodos: any = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    try {
      const response = await axios.get(TODOS_URL);
      return [...response.data];
    } catch (error: any) {
      return error.message;
    }
  }
);

// post todos
export const addNewTodo: any = createAsyncThunk(
  "todos/addNewTodo",
  async (initialTodo) => {
    try {
      const response = await axios.post(TODOS_URL, initialTodo);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
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
  },
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.loading = false;
      state.error_message = action.payload;
    },

    [addNewTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { getUser } = todosSlice.actions;

export default todosSlice.reducer;
