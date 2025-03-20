import { useState, useRef, useEffect } from "react";
import useTodoStore from "../store/TodoStore";
import { toast } from "react-toastify";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  const addTask = useTodoStore((state) => state.addTask);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title || !description || !time) {
      toast.error("Please fill in all fields!", { position: "top-right" });
      return;
    }

    addTask({
      id: Math.ceil(Math.random() * 10000000),
      title, 
      description,
      time,
      completed: false,
    });

    setTitle("");
    setDescription("");
    setTime("");
  };

  return (
    <form className="todo-input-form">
      <input
        type="text"
        placeholder="Enter task title"
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button className="submit-btn" onClick={handleAddTask}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
