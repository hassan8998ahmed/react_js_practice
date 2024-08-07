import { useState } from "react";
import "./App.css";
import AddTodo from "../src/components/AddTodo";
import Todos from "../src/components/Todos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>learn redux</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
