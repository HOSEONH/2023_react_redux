import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addValue, addValueAsync } from '../slices/thunkSlice';

export default function ThunkBox() {
  const thunkCounter = useSelector((state)=>(state.thunkCounter))
  
  const dispatch = useDispatch();

  return (
    <div>
        <h3>{thunkCounter.value}</h3>
        <button onClick={()=>{dispatch(addValue())}}
        >
            +1
        </button>
        <button onClick={()=>{dispatch(addValueAsync())}}
        >
            1초뒤 +1
        </button>
    </div>
  )
}