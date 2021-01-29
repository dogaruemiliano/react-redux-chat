import { combineReducers } from 'redux'

// Import all of the reducers for this app
import messagesReducer from './messagesReducer'

const identityReducer = (state = null) => state
// Combine reducers
const rootReducer = combineReducers({
  messages: messagesReducer,
  userName: identityReducer,
  channels: identityReducer
})

export default rootReducer
