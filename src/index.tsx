import * as React from 'react'
import * as ReactDom from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'

import Hello from './hello'

ReactDom.render(
  <Provider store={store}>
    <Hello content="Hello, World" />
  </Provider>,
  document.getElementById('app')
)
