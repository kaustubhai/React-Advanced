import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOGS } from './type'

export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs')
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR, payload: error.response.data
        })
    }
}

export const addLogs = (log) => async dispatch => {
    try {
        setLoading()

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await res.json()

        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR, payload: error.response.data
        })
    }
}

export const deleteLogs = (id) => async dispatch => {
    try {
        setLoading()

        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })

        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR, payload: error.response.data
        })
    }
}

export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const removeCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

export const updateLogs = (log, id) => async dispatch => {
    try {
        setLoading()
        const res = await fetch(`/logs/${id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(res)
        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGS_ERROR, payload: error.response.data
        })
    }
}

export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/logs?q=${text}`)
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR, payload: error.response.data
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}