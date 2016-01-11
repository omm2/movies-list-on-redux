import { combineReducers } from 'redux'
import list from './list'

const rootReducer = combineReducers({
    movies: list
})

export default rootReducer
