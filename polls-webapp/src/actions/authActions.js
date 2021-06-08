import * as api from '../api'

import { AUTH } from '../constants/actionTypes'

export const signin = (formData, history) => async(dispatch) => {
    try {

        history.push('/');
    } catch(err) {
        console.log(err);
    }
}

export const signup = (formData, history) => async(dispatch) => {
    try {

        history.push('/');
    } catch(err) {
        console.log(err);
    }
}
