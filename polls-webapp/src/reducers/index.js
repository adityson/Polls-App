import { combineReducers } from 'redux'
import pollReducer from './pollReducer'

export default combineReducers({
    polls: pollReducer,
})
