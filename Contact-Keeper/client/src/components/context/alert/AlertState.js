import React, { useReducer } from 'react'
import AlertReducer from './AlertReducer'
import AlertContext from './AlertContext'
import {v4 as uuid} from 'uuid'
import {
    SET_ALERT,
    REMOVE_ALERT
}from '../types'


const AlertState = props => {

    const initialState = []

    const [state, dispatch] = useReducer(AlertReducer, initialState)
    
    // Set Alert
    const setAlert = (msg, type) => {
        const id = uuid()
        dispatch({
            type: SET_ALERT,
            payload: { msg, id, type }
        })

        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 4000)
    }

    // Remove Alert
    const removeAlert = (id) => {
        dispatch({
            type: REMOVE_ALERT,
            payload: id
        })
    }

    return (
        <AlertContext.Provider value={{
            alerts: state,
            setAlert,
            removeAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
