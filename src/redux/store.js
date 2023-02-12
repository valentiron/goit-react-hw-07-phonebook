import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSlice  } from './contactSlice';
import { filterSlice } from './filterSlice';

const rootReducer = combineReducers({
    [contactSlice .name]:contactSlice .reducer,
    [filterSlice.name]: filterSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
  });