import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: { 
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
   },
  // preloadedState: {counter: mmkv.get('counter',{ value: 0 })},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});

// store.subscribe(() => { mmkv.set('counter', store.getState().counter); });
store.subscribe(() => { console.log('State updated:', store.getState()); });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
