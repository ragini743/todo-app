import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  savedTasks:[],
  isModalOpen: false,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Adds a new task to the state
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    // Deletes a task from the state
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    //edit existing task in the state
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.text = text;
      }
    },
    //complted the existing task
    toggleCompleteTask: (state, action) => {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
      }
    },
    saveTask: (state, action) => { // Add this action
        const task = state.tasks.find(task => task.id === action.payload);
        if (task) {
          state.savedTasks.push(task);
          state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
      },

  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  toggleCompleteTask,
  saveTask
  
} = taskSlice.actions;
export default taskSlice.reducer;
