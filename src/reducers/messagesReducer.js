import { FETCH_MESSAGES, POST_MESSAGE, SELECT_CHANNEL } from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages
    case POST_MESSAGE:
      const stateCopy = state.slice(0)
      stateCopy.push(action.payload)
      return stateCopy
    case SELECT_CHANNEL:
      console.log("payload inside messageReducer", action.payload)
      return []
    default:
      return state
  }
}
