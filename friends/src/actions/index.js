import axios from 'axios'
import { RSA_NO_PADDING } from 'constants';

export const FETCH_FRIEND_START = "FETCH_FRIEND_START";
export const FETCH_FRIEND_SUCCESS = "FETCH_FRIEND_SUCCESS";
export const FETCH_FRIEND_FAILURE = "FETCH_FRIEND_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const ADD_FRIEND = "ADD_FRIEND"
export const DELETE_FRIEND ="DELETE_FRIEND"


export const login = credentials => dispatch => {

    dispatch({ type: LOGIN_START })

    return axios.post('http://localhost:5000/api/login', credentials)
        .then(res => dispatch({
            type: LOGIN_SUCCESS, 
            payload: res.data
        }))
        .catch(err => dispatch({
            type: LOGIN_FAILURE,
            payload: err
        }))
}

export const getFriends = () => dispatch => {
    dispatch({type: FETCH_FRIEND_START});

    axios.get('http://localhost:5000/api/friends', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then(res => dispatch({
        type: FETCH_FRIEND_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: FETCH_FRIEND_FAILURE,
        payload: err
    }))
}

export const addFriend = newFriend => {
    return {
        type: ADD_FRIEND,
        payload: newFriend
    }
}

export const deleteFriend= targetFriend => {
    return{
        type: DELETE_FRIEND,
        payload: targetFriend
    }
}