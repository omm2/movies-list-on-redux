import { FETCH_MOVIES_SUCCESS } from '../constants'

export default function list(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
        return action.payload.movies
    default:
      return state
  }
}
