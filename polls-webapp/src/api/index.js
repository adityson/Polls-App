import axios from 'axios'

const url = 'http://localhost:5000/polls';

export const fetchPolls = () => axios.get(url);
export const addPoll = (newPoll) => axios.post(url, newPoll);
export const deletePoll = (id) => axios.delete(`${url}/${id}`);
export const likePoll = (id) => axios.patch(`${url}/${id}/like`);
