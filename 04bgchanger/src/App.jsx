import { useState } from "react";
// import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // const handleColors = (color) => {
  //   setColor(color);
  // };

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            ></button>
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Green" }}
              onClick={() => setColor("green")}
            ></button>
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            ></button>
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "skyblue" }}
              onClick={() => setColor("skyblue")}
            ></button>
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            ></button>
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "grey" }}
              onClick={() => setColor("grey")}
            ></button>
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
              onClick={() => setColor("violet")}
            ></button>
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            ></button>
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "chocolate" }}
              onClick={() => setColor("chocolate")}
            ></button>
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "brown" }}
              onClick={() => setColor("brown")}
            ></button>
            <button
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
