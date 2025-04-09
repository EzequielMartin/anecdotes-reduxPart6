import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
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

export default anecdoteSlice.reducer
export const { createAnecdote, vote, setAnecdotes } = anecdoteSlice.actions