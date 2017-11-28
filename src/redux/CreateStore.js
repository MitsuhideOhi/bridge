import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import type Reducer from 'redux'
import config from '../config'

// creates the store
export default (rootReducer: Reducer, rootSaga: any) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware({})
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  const createAppropriateStore = config.app.useReactotron ? console.tron.createStore : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  sagaMiddleware.run(rootSaga)

  return store
}
