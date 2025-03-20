import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const todoStore = (set) => ({
  tasks: [],

  addTask: (task) => {
    set((previousState) => ({ tasks: [task, ...previousState.tasks] }));
  },

  completeTask: (taskId) => {
    set((state) => {
      const updatedTasks = state.tasks.map((currentTask) =>
        currentTask.id === taskId ? { ...currentTask, completed: true } : currentTask
      );
      return { tasks: updatedTasks };
    });
  },

  incompleteTask: (taskId) => {
    set((state) => {
      const updatedTasks = state.tasks.map((currentTask) =>
        currentTask.id === taskId ? { ...currentTask, completed: false } : currentTask
      );
      return { tasks: updatedTasks };
    });
  },

  deleteTask: (taskId) => {
    set((state) => {
      const updatedTasks = state.tasks.filter(
        (currentTask) => currentTask.id !== taskId
      );
      return { tasks: updatedTasks };
    });
  },
});

const useTodoStore = create(devtools(persist(todoStore, { name: "tasks" })));
export default useTodoStore;
