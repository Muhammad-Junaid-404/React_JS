import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center bg-black text-3xl text-white p-3 rounded-xl mb-5">
        React with Tailwind CSS
      </h1>
      <Card name="TechGuy" btnText="Visit me" />
      <Card name="RogueBrat" />
    </>
  );
}

export default App;
