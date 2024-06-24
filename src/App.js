import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";


function App() {
  return (
    <div className="App md:w-[60%] mx-auto mt-10 ">
           <h1 className="text-center font-bold text-2xl ">React To-Do Application</h1>
           <TaskInput />
           <TaskList/>
    </div>
  );
}

export default App;
