import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import todos, { Todos } from './modules/Todo'

import App from './App'

let store: Store<Todos> = createStore(todos, [])

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
