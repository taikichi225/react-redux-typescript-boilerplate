import { connect } from 'react-redux'
import { toggleTodo, TodoAction, Todos } from '../modules/Todo'
import TodoList from '../components/TodoList'
import { Dispatch } from 'redux'

interface StateFromProps {
  todos: Todos
}

interface DispatchFromProps {
  onTodoClick: (id: number) => void
}

function mapStateToProps(state: Todos): StateFromProps {
  return {
    todos: state
  }
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): DispatchFromProps {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
