import React, { useReducer } from "react";

import { initialState, reducer } from "../reducers";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = task => {
    dispatch({
      type: "ADD",
      payload: { item: task, completed: false, id: Date.now() }
    });
  };

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR" });
  };

  return (
    <div>
      <h2>Todo App</h2>
      <ul>
        {state.todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => toggleCompleted(todo.id)}
          >
            {todo.item}
          </li>
        ))}
      </ul>
      <TodoForm clearCompleted={clearCompleted} addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
