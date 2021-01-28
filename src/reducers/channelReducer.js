import { SELECT_CHANNEL } from '../actions'

export default function(state = 'team1', action) {
  switch (action.type) {
    case SELECT_CHANNEL:
      return action.payload
    default:
      return state
  }
}
