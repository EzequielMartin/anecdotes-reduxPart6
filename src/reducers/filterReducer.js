const filterReducer = (state = "", action) => {
  switch (action.type) {
  case "SET_FILTER":
    return action.payload
  default:
    return state
  }
}

export const handleChange = event => {
  return {
    type: "SET_FILTER",
    payload: event.target.value
  }
}

export default filterReducer