import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask,  toggleCompleteTask } from "../redux/taskSlice";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleToggleComplete = (id) => {
    dispatch(toggleCompleteTask(task.id));
  };
  const handleEdit = (id) => {
    const newText = prompt('Edit task:',task.text);
    if (newText) {
      dispatch(editTask({ id, text: newText }));
    }
  };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };
  console.log("isEditing",isEditing)

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text: newText }));
    setIsEditing(false);
  };


  return (
    <div>
      <div className="task-item mt-4 bg-green-200 flex  sm:justify-between  pl-2 py-2 sm:items-center flex-col sm:flex-row">
        <div className="w-[100%] sm:w-[60%] mr-10">
          {isEditing ? (
            <input
              className="outline-none bg-transparent w-full "
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? handleSave() : null)}
            />
          ) : (
            <span className="text-wrap break-words">{task.text}</span>
          )}
        </div>
        <div className="flex w-[100%] sm:w-[40%] justify-end">
          <div className="rounded-md mr-2">
            <button
              onClick={()=>handleEdit(task.id)}
              className="bg-blue-800 text-white py-1 px-2 rounded-md "
            >
              Edit
            </button>
          </div>
          <div className="mr-2">
            <button
              onClick={handleSave}
              className="bg-blue-800 text-white py-1 px-2 rounded-md "
            >
              Save
            </button>
          </div>
          <div className="mr-2">
            <button
              onClick={handleDelete}
              className="bg-blue-800 text-white py-1 px-2 rounded-md "
            >
              Delete
            </button>
          </div>
          <div className="my-auto mr-1 w-[10%]">
            <img
              src={
                task.completed ? "./complte-icon.png" : "./incomplete-icon.png"
              }
              alt=""
              onClick={() => handleToggleComplete(task.id)}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
