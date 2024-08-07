import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, //payload is an object
      };
      state.todos.push(todo);
    }, // state or actions lazmi atain hain
    //values action may say aen gen
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  }, // properties and functions atain hai
}); // objects aengain enmay

// state my current state hoge or actions say values add hoge matlab jo bhe data pass ho raha hay
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer