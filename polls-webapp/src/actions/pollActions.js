import * as api from '../api'

export const getPolls = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPolls();
        dispatch({ type: 'ALL_POLLS', payload: data });
    } catch(err) {
        console.log(err.message);
    }
}

export const createPoll = (poll) => async(dispatch) => {
    try {
        const { data } = await api.addPoll(poll);
        dispatch({ type: 'CREATE_POLL', payload: data});
    } catch(err) {
        console.log(err.message);
    }
}
