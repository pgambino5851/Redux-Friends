
import {FETCH_FRIEND_START, FETCH_FRIEND_SUCCESS, FETCH_FRIEND_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, ADD_FRIEND, DELETE_FRIEND} from '../actions/index'


const initialState = {
    friends: [],
    error: '',
    isFetching: false
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
        case FETCH_FRIEND_START:
            return{
                ...state,
                isFetching: true
            }
        case LOGIN_SUCCESS:
            console.log("Login Success Payload: ", action.payload);
            localStorage.setItem('token', action.payload.payload)
            return{
                ...state,
                isFetching: false
            }
        case LOGIN_FAILURE: 
            console.log("Login Failure payload: ",action.payload);
            return{
                ...state,
                error: action.payload
            }
        case FETCH_FRIEND_SUCCESS:
            console.log("Fetch Friend Success payload:", action.payload)
            return {
                ...state,
                friends: action.payload,
                isFetching: false
            }
        case FETCH_FRIEND_FAILURE:
        console.log("Fetch friend failure payload: ", action.payload)
        return{
            ...state, 
            error: action.payload,
            isFetching: false
        }
        case ADD_FRIEND:
        console.log(action.payload)
        return {
            ...state,
            friends:[...state.friends, action.payload]
        }
        case DELETE_FRIEND:
        return{
            ...state,
            friends:[...state.friends.filter(friend => {
                return friend.name !== action.payload
            })]
        }
        default:
        console.log("Initial state:", state)
            return state;
    }
}