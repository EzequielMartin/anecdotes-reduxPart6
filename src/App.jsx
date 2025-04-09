import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/Anecdotes'
import { Filter } from './components/Filter'
import anecdotesService from "./services/anecdotes"
import { useEffect } from 'react'
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdotesService
      .getAll().then(a => dispatch(setAnecdotes(a)))
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