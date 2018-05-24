import types from './types';
import axios from 'axios';
import sign_in from '../components/sign_in';

const BASE_URL = 'http://api.reactprototypes.com';

export function signUp(cred){
    return async (dispatch) => {
        const response = await axios.post(`${BASE_URL}/signup`, cred);

        console.log('Sign Up Response:', response);
        localStorage.setItem('token', response.data.token);

        dispatch({
            type: types.SIGN_IN
        });
    }
}

export function signIn(cred){
    return async dispatch => {
        const response = await axios.post(`${BASE_URL}/signin`, cred);
        console.log('Sign In Response', response);
        localStorage.setItem('token', response.data.token);

        dispatch({
            type: types.SIGN_IN
        });
    }
}