// - Import action types
import * as types from 'actionTypes'

// - Default state for reducer
var defaultState = {
  readStatus: false,
}

// - Post reading reducer
export var postReadingReducer = (state = defaultState, action) => {

    console.log('post read reducer updating store');
    switch (action.type) {
    case types.OPEN_POST_READ_PAGE:
        return {
        ...state,
        readStatus: action.readStatus
        }

    default:
        return state;
    }
}
