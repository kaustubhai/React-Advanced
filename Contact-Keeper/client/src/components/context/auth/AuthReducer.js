import axios from 'axios'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types'

const authReducer = (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return ({
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload.data
            })
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return ({
                ...state,
                isAuthenticated: true,
                loading: false,
                token: action.payload.token
            })
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return ({
                ...state,
                isAuthenticated: true,
                loading: false,
                token: action.payload.token
            })
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return ({
                ...state,
                isAuthenticated: false,
                loading: false,
                token: null,
                user: null,
                errors: action.payload
            })
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return ({
                ...state,
                isAuthenticated: false,
                loading: false,
                token: null,
                user: null,
                errors: action.payload
            })
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return ({
                ...state,
                isAuthenticated: false,
                loading: false,
                token: null,
                user: null,
                errors: action.payload
            })
        default:
            return state;
    }
}

export default authReducer