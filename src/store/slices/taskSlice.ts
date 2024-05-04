import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: string;
}

interface TaskState {
  tasks: Task[];
}

// Define the initial state using that type
const initialState: TaskState = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
};

export const taskSlice = createSlice({
  name: 'task',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index].completed = !state.tasks[index].completed;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default taskSlice.reducer;
