// @flow
import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'

export default () => {
  const rootReducer = combineReducers({
    config: require('./ConfigRedux').reducer
  })
  return configureStore(rootReducer, rootSaga)
}
