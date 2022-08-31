import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { TodoState, TodoInterface } from "../interfaces/interfaces";
import localStore from "../utilities/localStore";

const initialState: TodoState = {
  todos: [],
  user: {
    login: localStore ? true : false,
    name: localStore ? localStore : null,
  },
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = {
        login: action.payload.login,
        name: action.payload.name,
      };
    },
  },
  extraReducers: {},
});

export const { getUser } = todosSlice.actions;

export default todosSlice.reducer;
