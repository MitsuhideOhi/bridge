// @flow
import { put } from 'redux-saga/effects'
import ConfigActions from '../redux/ConfigRedux'
import config from '../config'

const {
  setConfig
} = ConfigActions

export function * startup (): Generator<any, any, any> {
  try {
    yield put(setConfig(config))
  } catch (error) {
  }
}
