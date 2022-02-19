import { createSlice } from "@reduxjs/toolkit";

interface State {
  data: { text: string; id: number; completed: boolean }[];
}

const initialState: State = {
  data: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const text: string = action.payload;
      const completed: boolean = action.payload;
      const id = Math.random();

      state.data = [{ text, completed, id }, ...state.data];
    },
    removeTodo(state, action) {
      const id: number = action.payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== id),
      };
    },
  },
});
export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
