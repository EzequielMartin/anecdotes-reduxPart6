import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/Anecdotes'
import { Filter } from './components/Filter'
import { useEffect } from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <Filter />
      <AnecdoteForm />
    </div>
  )
}

export default App