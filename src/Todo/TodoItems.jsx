import useTodosStore from "../store/TodoStore"
import TodoItem from "./TodoItem";


function TodoItems() {

    const tasks = useTodosStore((state) => state.tasks);
    // console.log(tasks)
    return (
        // <section className="todo-items-container">
        //     {
        //         tasks.map((task) => <TodoItem title={task.title} description={task.description} complete={task.complete} key={task.id} />)
        //     }
        // </section> 

        <div className="todo-list">
        {tasks.map(task => (
          <TodoItem 
            key={task.id}
            id={task.id}
            title={task.title}  
            description={task.description}  
            time={task.time}  
            completed={task.completed}
          />
        ))}
      </div>
    )
}

export default TodoItems
