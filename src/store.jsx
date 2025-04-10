import filterReducer from './reducers/filterReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    anecdote: anecdoteReducer,
    filter: filterReducer
  }
  // ,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  // }),
})

export default store