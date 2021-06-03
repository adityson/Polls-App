import { ALL_POLLS, CREATE_POLL, UPDATE_POLL, DELETE_POLL } from '../actions/actionTypes'

export default function foo(state = [], action) {
    switch(action.type){
        case ALL_POLLS:
            return action.payload
        case CREATE_POLL:
            return [...state, action.payload];
        case UPDATE_POLL:
            return state.map((poll) => poll._id === action.payload._id ? action.payload : poll);
        case DELETE_POLL:
            return state.filter((poll) => poll._id !== action.payload);
        default:
            return state;
    }
}
