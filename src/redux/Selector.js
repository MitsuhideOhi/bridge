// @flow
import {createSelector} from 'reselect'

const getConfig = state => state.config
const getUser = state => state.userModel

export const selectUserModel = createSelector(
  [getUser],
  user => user
)

export const selectConfig = createSelector(
  [getConfig],
  config => config
)
