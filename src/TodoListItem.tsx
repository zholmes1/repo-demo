import Todo from './repo/Todo'
import React from 'react'
import todosRepo from './repo/todosRepo'

export default ({ todo: { completed, text }, index }: { todo: Todo, index: number }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={e => {
          const todos = [...todosRepo.getState()]
          todos[index].completed = e.target.checked
          todosRepo.setState(todos)
        }}/>
      {completed ? <s>{text}</s> : <span>{text}</span>}
    </div>
  )
}
