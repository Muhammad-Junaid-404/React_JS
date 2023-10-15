// src/features/todo/todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [
        {
            id: nanoid(),
            text: "Welcome to RTK",
        },
    ],
    editedTodo: null,
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
            // Update localStorage
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            const todo = state.todos.filter((todo) => todo.id !== action.payload);
            state.todos = todo;
            // Update localStorage
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const editedTodo = state.todos.find((todo) => todo.id === id);

            if (editedTodo) {
                editedTodo.text = text;
                // Update localStorage
                localStorage.setItem("todos", JSON.stringify(state.todos));
            }
        },
        editTodo: (state, action) => {
            state.editedTodo = action.payload;
        },
    },
});


export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
