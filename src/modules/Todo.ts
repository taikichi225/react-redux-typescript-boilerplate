/** Action */
export interface Todo {
  id: number
  completed: boolean
  text: string
}

/** Action */
export type Todos = Todo[]

let id: number = 0

/** Action Creators */
export const generateTodo = (text: string, id: number): Todo => {
  return {
    id,
    completed: false,
    text
  }
}

/** Action Creators */
export const generateTodos = (text: string[]): Todo[] => {
  return text.map(t => {
    let todo = generateTodo(t, id)
    id++
    return todo
  })
}

let nextTodoId = 0

/** Action Type */
export enum TodoActionType {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

/** Action */
export interface AddTodoAction {
  type: TodoActionType.ADD_TODO
  id: number
  text: string
}

/** Action */
export interface ToggleTodoAction {
  type: TodoActionType.TOGGLE_TODO
  id: number
}

/** Action */
export type TodoAction = AddTodoAction | ToggleTodoAction

/** Action Creators */
export function addTodo(text: string): AddTodoAction {
  return {
    type: TodoActionType.ADD_TODO,
    id: nextTodoId++,
    text: text
  }
}

/** Action Creators */
export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: TodoActionType.TOGGLE_TODO,
    id: id
  }
}

/** Reducers */
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
