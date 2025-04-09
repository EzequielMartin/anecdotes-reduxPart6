import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import filterReducer from './reducers/filterReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import { configureStore } from '@reduxjs/toolkit'

// const reducer = combineReducers({
//   anecdote: anecdoteReducer,
//   filter: filterReducer
// })

// const store = createStore(reducer)

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)