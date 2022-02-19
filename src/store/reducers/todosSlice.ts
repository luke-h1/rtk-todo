import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  data: { text: string; id: number}[];
}

const initialState: State = {
  data: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const text = action.payload;
      const id = Math.random();

      state.data = [{ text, id }, ...state.data];
    },
    removeTodo(state, action: PayloadAction<number>) {
      const id = action.payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== id),
      };
    },
  },
});
export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
