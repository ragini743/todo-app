import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";


function App() {
  return (
    <div className="App ">
           <h1>React To-Do Application</h1>
           <TaskInput />
           <TaskList/>
    </div>
  );
}

export default App;
