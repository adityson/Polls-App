import * as api from '../api'

import { ALL_POLLS, CREATE_POLL, DELETE_POLL, UPDATE_POLL } from '../constants/actionTypes'

import { toast } from 'react-toastify'

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
        toast.success('Poll created succesfully!')
        dispatch({ type: CREATE_POLL, payload: data});
    } catch(err) {
        if(err.response.data.message){
            toast.error(err.response.data.message);
        } else{
            console.log(err.message);
        }
    }
}

export const deletePoll = (id) => async(dispatch) => {
    try{
        await api.deletePoll(id);
        toast.success('Poll deleted succesfully!');
        dispatch({ type: DELETE_POLL, payload: id});
    } catch(err) {
        if(err.response.data.message){
            toast.error(err.response.data.message);
        } else {
            console.log(err.message);
        }
    }
}

export const likePoll = (id) => async(dispatch) => {
    try{
        const { data } = await api.likePoll(id);
        dispatch({ type: UPDATE_POLL, payload: data });
    } catch(err) {
        if(err.response.data.message){
            toast.error(err.response.data.message);
        } else{
            console.log(err.message);
        }
    }
}

export const votePoll = (id, choiceId) => async(dispatch) => {
    try{
        const { data } = await api.votePoll(id, choiceId);
        dispatch({ type: UPDATE_POLL, payload: data });
    } catch(err){
        if(err.response.data.message){
            toast.error(err.response.data.message);
        } else {
            console.log(err.message);
        }
    }
}
