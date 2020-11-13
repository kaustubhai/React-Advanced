import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../actions/type'

const initialState = {
    logs: null,
    current: null,
    loading: false,
    errors: null
}

const logReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default logReducer