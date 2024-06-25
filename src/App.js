import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useSelector } from "react-redux";
import SavedTasksModal from "./components/SavedTaskModal";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App md:w-[60%] mx-auto mt-10 ">
           <h1 className="text-center font-bold text-2xl ">React To-Do Application</h1>
           <TaskInput />
           <TaskList/>
           <button onClick={openModal} className="bg-blue-800 text-white py-1 px-2 rounded-md">
        View Saved Tasks
      </button>
      <SavedTasksModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
