import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

function createMyStore() {
  const enhancer = composeWithDevTools(applyMiddleware(thunk))

  const store = createStore(rootReducer, enhancer)

  return { store }
}

export const { store } = createMyStore()
