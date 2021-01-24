import { combineReducers } from 'redux'

// Import all of the reducers for this app


// Combine reducers
const rootReducers = combineReducers({
  changeMe: (state = null, action) => state
})

export default rootReducers
