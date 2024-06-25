import React from "react";
import { useSelector } from "react-redux";

const SavedTasksModal = ({ isOpen, onClose }) => {
  const savedTasks = useSelector((state) => state.tasks.savedTasks);

  if (!isOpen) return null;

  return (
    <div className=" absolute bg-gray-500 top-0 bottom-0 left-0 right-0 ">
      <div className="md:w-[60%] bg-white mt-[10%] mb-[10%] mx-auto py-4 px-4 ">
        <div className="flex justify-between">
        <h2 className="font-bold text-lg">Saved Tasks</h2>
        <button onClick={onClose}  className="font-extrabold text-red-600 text-lg">Close</button>
        </div>
       
        <div className="">
        <ul>
          {savedTasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      
        </div>
        
      </div>
    </div>
  );
};

export default SavedTasksModal;
