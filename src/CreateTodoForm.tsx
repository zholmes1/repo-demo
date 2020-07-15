import React, { useState } from 'react'
import todosRepo from './repo/todosRepo'

export default () => {
  const [text, setText] = useState('')

  return (
    <div>
      <input type="text" onChange={e => setText(e.target.value)}/>
      <button onClick={() => {
        todosRepo.setState([
          ...todosRepo.getState(),
          {
            text,
            completed: false
          }
        ])
      }}>Create
      </button>
    </div>
  )
}
