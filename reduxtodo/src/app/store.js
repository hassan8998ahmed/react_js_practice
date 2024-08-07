import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoslice";

export const store = configureStore({
  reducer: todoReducer,
});

// pehlay store banao pher reducer banao reducer ko slices kehtain hain redux me
