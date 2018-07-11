// - Import post action types
import * as types from 'actionTypes'

// - Post actions
export const openPostReadPage = (readStatus) => {
  return{
    type: types.OPEN_POST_READ_PAGE,
    readStatus
  }
}