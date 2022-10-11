import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './slice';

const store = configureStore({
  reducer: moviesSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
