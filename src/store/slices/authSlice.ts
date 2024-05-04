import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || '',
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = action.payload;
      localStorage.setItem('isLoggedIn', state.isLoggedIn);
    },
    logout: (state) => {
      state.isLoggedIn = '';

      localStorage.setItem('isLoggedIn', state.isLoggedIn);
    },
  },
});

export const { login, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default authSlice.reducer;
