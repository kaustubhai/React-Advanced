import React, { useReducer } from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
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
import setAuthToken from '../../utils/setAuthToken'



const AuthState = (props) => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        errors: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

// Load User
const loadUser = async () => {
    try {
        if (localStorage.token){
            setAuthToken(localStorage.token)
            const user = await axios.get('/api/auth')
            console.log(user)
            dispatch({ type: USER_LOADED, payload: user })
        }
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error.response.data.msg })
        
        console.log('error')
    }
}
    // Register User
    const registerUser = async (formData) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/users', formData, config)

            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
            
            loadUser();

        } catch (error) {
            dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg})
        }
    }
    // Login User
    const loginUser = async (formData) => {

        const config = {
            headers: {
                'Content-Type': 'application/json' 
            }
        }

        try {
            const res = await axios.post('/api/auth', formData, config)

            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            
            loadUser();
            
        } catch (error) {
            dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg})
        }
    }
    // Logout User
    const logout = () => {
        dispatch({ 
            type: LOGOUT
        })
    }
    // Clear Errors

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                errors: state.errors,
                registerUser,
                loginUser,
                loadUser,
                logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
