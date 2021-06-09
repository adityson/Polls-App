import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const fetchPolls = () => API.get('/polls');
export const addPoll = (newPoll) => API.post('/polls', newPoll);
export const deletePoll = (id) => API.delete(`/polls/${id}`);
export const likePoll = (id) => API.patch(`/polls/${id}/like`);
export const votePoll = (id, choiceId) => API.patch(`/polls/${id}/${choiceId}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
