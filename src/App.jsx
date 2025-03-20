import Todo from "./Todo/Todo";
import { ToastContainer} from "react-toastify"


function App() {
  return (
    <div>
      <div className="hero-section" >
        <ToastContainer />
        <Todo/>
      </div>
    </div>
  )
}

export default App
