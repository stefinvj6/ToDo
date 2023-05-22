import React, { useState } from 'react'

function AddTask({addTask}) {
  const [value,setValue] = useState("")

  const addItem =()=>{
    addTask(value)
    setValue('')
  }
  return (
    <>
      <div className='input-container'>
        <input type="text" className='input' placeholder='Add Task' 
        value={value}
        onChange={(e)=>{
          setValue(e.target.value)
        }} 
        />
        <button className='add-btn' onClick={addItem}>ADD</button>
      </div>
    </>
  )
}

export default AddTask