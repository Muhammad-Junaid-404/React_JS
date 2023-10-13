import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, editTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  // const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const editedTodo = useSelector((state) => state.editedTodo);

  // Initialize inputText with editedTodo value when the component mounts
  const [inputText, setInputText] = useState(editedTodo ? editedTodo.text : "");

  useEffect(() => {
    // Update inputText when editedTodo changes (e.g., when clicking "Edit")
    setInputText(editedTodo ? editedTodo.text : "");
  }, [editedTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editedTodo) {
      dispatch(updateTodo({ id: editedTodo.id, text: inputText }));
      dispatch(editTodo(null)); // Clear the editedTodo state
    } else {
      dispatch(addTodo(inputText));
    }

    // setTodo("");
    setInputText(""); // Clear the input field
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-x-3 mt-12">
        <input
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {editedTodo ? "Save" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default AddTodo;
