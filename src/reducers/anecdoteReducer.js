import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      //console.log(action.payload);
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes+1}
      return state.map(a => a.id !== id ? a : changedAnecdote)//si a.id es distinto de id retorno a sino retorno la anecdota cambiada
    },
    setAnecdotes(state, action){
      return action.payload
    }

  }
})

export const { appendAnecdote, vote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer