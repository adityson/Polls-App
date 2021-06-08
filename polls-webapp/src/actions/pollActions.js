import * as api from '../api'

import { ALL_POLLS, CREATE_POLL, DELETE_POLL, UPDATE_POLL } from '../constants/actionTypes'

export const getPolls = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPolls();
        dispatch({ type: ALL_POLLS, payload: data });
    } catch(err) {
        console.log(err.message);
    }
}

export const createPoll = (poll) => async(dispatch) => {
    try {
        const { data } = await api.addPoll(poll);
        dispatch({ type: CREATE_POLL, payload: data});
    } catch(err) {
        console.log(err.message);
    }
}

export const deletePoll = (id) => async(dispatch) => {
    try{
        await api.deletePoll(id);
        dispatch({ type: DELETE_POLL, payload: id});
    } catch(err) {
        console.log(err);
    }
}

export const likePoll = (id) => async(dispatch) => {
    try{
        const { data } = await api.likePoll(id);
        dispatch({ type: UPDATE_POLL, payload: data });
    } catch(err) {
        console.log(err);
    }
}

export const votePoll = (id, choiceId) => async(dispatch) => {
    try{
        const { data } = await api.votePoll(id, choiceId);
        dispatch({ type: UPDATE_POLL, payload: data });
    } catch(err){
        console.log(err);
    }
}
