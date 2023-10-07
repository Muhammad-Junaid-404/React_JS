import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(4);
  // let counter = 3;
  const addValue = () => {
    setCounter((prev) => prev + 1);
    console.log(`Counter value is ${counter} `);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };
  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
    </>
  );
}

export default App;
