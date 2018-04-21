import { createStore, compose, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

export default function configStore(rootReducer) {
  return createStore(rootReducer, applyMiddleware(
    logger,
    thunkMiddleware,
    promiseMiddleware()
  ))
}
