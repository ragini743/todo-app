import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
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
    //
    toggleCompleteTask: (state, action) => {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
      }
    },

  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  toggleCompleteTask,
  
} = taskSlice.actions;
export default taskSlice.reducer;
