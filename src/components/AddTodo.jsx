import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import {addTodo } from "../features/todo/todoSlice"

const AddTodo = () => {
    const [input, setinput ] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        dispatch(addTodo(input));
        setinput("")
    }
  return (
    <div>
      <form >
        <input type="text" value={input} onChange={(e) =>  setinput(e.target.value) } />
        <div type='submit'onClick={addTodoHandler} >Submit</div>
      </form>
    </div>
  )
}

export default AddTodo
