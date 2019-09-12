import React, { useState } from "react";

const TodoForm = props => {
  const [task, setTask] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task"></label>
      <input
        type="text"
        name="task"
        id="task"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
