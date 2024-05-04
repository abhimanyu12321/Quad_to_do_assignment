import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/taskSlice';
import authReducer from './slices/authSlice';

import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    task: tasksReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
