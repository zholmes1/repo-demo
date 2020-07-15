import createRepo from './createRepo'
import Todo from './Todo'

export default createRepo<Todo[]>([], {
  onSetState: todos => {
    console.log(todos)
  }
})
