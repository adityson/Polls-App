import axios from 'axios'

const url = 'http://localhost:5000/polls';

export const fetchPolls = () => axios.get(url);
export const addPoll = (newPoll) => axios.post(url, newPoll);
