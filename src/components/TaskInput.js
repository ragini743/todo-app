import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className=" w-full mt-10 text-[1rem] md:text-lg mb-6 ">
      <input className='p-2 border-black  border-[1px] border-r-0 rounded-tr-none rounded-br-none rounded-lg sm:w-[80%] w-[75%] outline-none' 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
        onKeyPress={(e) => e.key === 'Enter' ? handleAddTask() : null}
      />
      <button onClick={handleAddTask} className='sm:w-[20%] border-black border-l-0 border-[1px] rounded-lg p-2 bg-blue-200 font-bold rounded-bl-none w-[25%]   rounded-tl-none'>Add Task</button>
    </div>
  );
};

export default TaskInput;
