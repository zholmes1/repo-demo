import React from 'react'
import ReactDOM from 'react-dom'
import CreateTodoForm from './CreateTodoForm'
import TodosList from './TodosList'

ReactDOM.render(
  <div>
    <h1>Repo Example</h1>
    <hr/>
    <CreateTodoForm/>
    <hr/>
    <TodosList/>
  </div>,
  document.getElementById('root')
)

