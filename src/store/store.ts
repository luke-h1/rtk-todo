import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
