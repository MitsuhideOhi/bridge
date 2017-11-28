// @flow
import { takeLatest } from 'redux-saga/effects'
import { StartupTypes } from '../redux/StartupRedux'
import { startup } from './StartupSagas'

export default function * root (): Generator<any, any, any> {
  yield [
    takeLatest(StartupTypes.STARTUP, startup)
  ]
}
