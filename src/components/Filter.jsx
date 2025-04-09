import { useDispatch } from "react-redux"
import { handleChange } from "../reducers/filterReducer"

export const Filter = () => {

  const dispatch = useDispatch()

  return (
    <div style={{marginTop: 20}}>Filter: <input onChange={(e) => dispatch(handleChange(e))} /></div>
  )
}
