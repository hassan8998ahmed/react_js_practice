import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  //  setCounter()

  //let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    
    if(counter > 0){
      console.log("Removed", counter);
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>hassan ahmad</h1>
      <h2>counter Value: {counter}</h2>

      <button onClick={addValue} >add value: {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value: {counter}</button>
      <p>footer : hassan ahmad </p>
    </>
  );
}

export default App;
