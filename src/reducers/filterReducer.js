// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//   case "SET_FILTER":
//     return action.payload
//   default:
//     return state
//   }
// }

// export const handleChange = event => {
//   console.log(event);
//   return {
//     type: "SET_FILTER",
//     payload: event.target.value
//   }
// }

// export default filterReducer

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    handleChange(state, action) {

      return action.payload.target.value

    }
  }

})

export default filterSlice.reducer
export const { handleChange } = filterSlice.actions