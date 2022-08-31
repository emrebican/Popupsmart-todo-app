import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

interface TodoInterface {
  title: string;
  id: string;
  completed: boolean;
  edit: boolean;
}

interface TodoState {
  todos: any;
}

const initialState: TodoState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = todosSlice.actions;

export default todosSlice.reducer;
