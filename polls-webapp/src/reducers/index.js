import { combineReducers } from 'redux'
import pollReducer from './pollReducer'
import authReducer from './authReducer'

export default combineReducers({
    polls: pollReducer,
    auth: authReducer,
})
