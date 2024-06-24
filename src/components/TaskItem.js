import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/taskSlice";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text: newText }));
    setIsEditing(false);
  };

  return (
    <div className="task-item mt-4 bg-green-200 flex  justify-between  pl-2 py-2 items-center">
      <div className="w-[75%] mr-10">
        {isEditing ? (
          <input className="outline-none bg-transparent w-full "
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? handleSave() : null)}
          />
        ) : (
          <span className="text-wrap break-words">{task.text}</span>
        )}
      </div>
      <div className="flex w-[25%] justify-end">
        <div className="rounded-md mr-2">
          <button onClick={handleEdit} className="bg-blue-800 text-white py-1 px-2 rounded-md ">
            Edit
          </button>
        </div>
        <div className="mr-2">
          <button onClick={handleSave} className="bg-blue-800 text-white py-1 px-2 rounded-md ">Save</button>
        </div>
        <div className="mr-2">
          <button onClick={handleDelete} className="bg-blue-800 text-white py-1 px-2 rounded-md ">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
