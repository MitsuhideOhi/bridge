// @flow
import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export type ConfigAction = {
  config: Object
}

type ConfigState = Immutable<Object>

const { Types, Creators } = createActions({
  setConfig: ['config']
})

export const ConfigTypes = Types
export default Creators

export const INITIAL_STATE: ConfigState = Immutable({})

export const setConfig = (state: ConfigState, {config}: ConfigAction) => {
  return Immutable(config)
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CONFIG]: setConfig
})
