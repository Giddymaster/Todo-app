import Now from "../utils/now";
import useTodoStore from "../store/TodoStore";
import TodoInput from "./TodoInput";

const Hero = () => {
    const tasks = useTodoStore((state) => state.tasks);
    let incomplete = tasks.filter(task => !task.completed).length;

    return (
      <section className="hero">
        <h3>Good {Now()} Gideon</h3>
        <h2>You have {incomplete} tasks left today</h2>
        <TodoInput />
      </section>
    );
};

export default Hero;
