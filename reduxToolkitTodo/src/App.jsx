import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-black-800">Welcome to RTK</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
