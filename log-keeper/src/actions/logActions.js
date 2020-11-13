import reducer from '../reducers';
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './type'

export const getLogs = () => async dispatch => {

    try {
        setLoading();

        const res = await fetch('./logs')
        const dara = await res.json();

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

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}