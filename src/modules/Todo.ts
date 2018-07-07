export interface Todo {
  id: number
  completed: boolean
  text: string
}

export type Todos = Todo[]

let id: number = 0

export const generateTodo = (text: string, id: number): Todo => {
  return {
    id,
    completed: false,
    text
  }
}

export const generateTodos = (text: string[]): Todo[] => {
  return text.map(t => {
    let todo = generateTodo(t, id)
    id++
    return todo
  })
}

let nextTodoId = 0

export enum TodoActionType {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface AddTodoAction {
  type: TodoActionType.ADD_TODO
  id: number
  text: string
}

export interface ToggleTodoAction {
  type: TodoActionType.TOGGLE_TODO
  id: number
}

export type TodoAction = AddTodoAction | ToggleTodoAction

export function addTodo(text: string): AddTodoAction {
  return {
    type: TodoActionType.ADD_TODO,
    id: nextTodoId++,
    text: text
  }
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: TodoActionType.TOGGLE_TODO,
    id: id
  }
}

function todos(state: Todos, action: TodoAction): Todos {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TodoActionType.TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id == action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos
