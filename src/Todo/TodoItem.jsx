import React from "react";
import useTodoStore from "./../store/TodoStore";

function TodoItem({ id, title, description, time, completed }) {
  const completeTask = useTodoStore((state) => state.completeTask);
  const incompleteTask = useTodoStore((state) => state.incompleteTask);
  const deleteTask = useTodoStore((state) => state.deleteTask);
  const handleMarkAsDone = () => completeTask(id);
  const handleMarkIncomplete = () => incompleteTask(id);
  const handleDeleteTask = () => deleteTask(id);

  return (
    <div className={`todo-item ${completed ? "completed" : ""}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Time:</strong> {time}</p>
      <div className="todo-item__controls">
        <button onClick={completed ? handleMarkIncomplete : handleMarkAsDone}>
          {completed ? "Done" : "Mark as Done"}
        </button>
        <button className="delete-btn" onClick={handleDeleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
