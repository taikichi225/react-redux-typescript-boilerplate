import { connect } from 'react-redux'
import { addTodo, TodoAction, Todos } from '../modules/Todo'
import AddButton, { AddTodoButtonProps } from '../components/AddTodoButton'
import { Dispatch } from 'redux'

function mapStateToProps(state: Todos): {} {
  return {}
}

function mapDispatchToProps(
  dispatch: Dispatch<TodoAction>
): AddTodoButtonProps {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s))
    }
  }
}

export default connect<{}, AddTodoButtonProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(AddButton)
