import { combineReducers } from 'redux'

// Import all of the reducers for this app
import messagesReducer from './messagesReducer'
import channelReducer from './channelReducer'

const identityReducer = (state = null) => state
// Combine reducers
const rootReducer = combineReducers({
  messages: messagesReducer,
  selectedChannelId: channelReducer,
  userName: identityReducer,
  channels: identityReducer
})

export default rootReducer
