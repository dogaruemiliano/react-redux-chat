import { combineReducers } from 'redux'

// Import all of the reducers for this app


// Combine reducers
const rootReducer = combineReducers({
  changeMe: (state = null, action) => state
})

export default rootReducer
