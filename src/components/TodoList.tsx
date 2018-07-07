import * as React from 'react'
import Todo from './Todo'
import * as State from '../modules/Todo'

export interface TodoListProps {
  todos: State.Todos
  onTodoClick: (id: number) => void
}

class TodoList extends React.Component<TodoListProps, {}> {
  render() {
    const { todos, onTodoClick } = this.props
    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </ul>
    )
  }
}

export default TodoList
