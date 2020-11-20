import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT } from '../actions/type'

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
        case GET_LOGS: 
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map((log) => log.id !== action.payload.id ? log : action.payload),
                loading: false
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter((log) => log.id !== action.payload),
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case LOGS_ERROR:
            console.log(action.payload)
            return ({
                ...state,
                errors: action.payload
            })
        default:
            return state
    }
}

export default logReducer