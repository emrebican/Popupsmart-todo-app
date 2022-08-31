import {
  createSlice,
  createAsyncThunk,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  TodoState,
  TodoInterface,
  UserInterface,
} from "../interfaces/interfaces";
import getLocalStorage from "../utilities/getLocalStorage";

const initialState: TodoState = {
  todos: [],
  user: {
    login: getLocalStorage ? true : false,
    name: getLocalStorage ? getLocalStorage : null,
  },
};

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
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        title: action.payload,
        id: nanoid(),
        completed: false,
        edit: false,
        date: "date",
      });
    },
  },
  extraReducers: {},
});

export const { getUser, addTodo } = todosSlice.actions;

export default todosSlice.reducer;
