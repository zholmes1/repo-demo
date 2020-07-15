import todosRepo from './repo/todosRepo'
import React from 'react'
import TodoListItem from './TodoListItem'

export default () => {
  const todos = todosRepo.useState()

  if (todos.length === 0) {
    return <p>No todos!</p>
  }

  return (
    <>
      {todos.map((todo, index) => {
        return (
          <TodoListItem
            key={index.toString()}
            todo={todo}
            index={index}/>
        )
      })}
    </>
  )
}
