import React from "react";
import { useSelector } from "react-redux";

const SavedTasksModal = ({ isOpen, onClose }) => {
  const savedTasks = useSelector((state) => state.tasks.savedTasks);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Saved Tasks</h2>
        <ul>
          {savedTasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SavedTasksModal;
