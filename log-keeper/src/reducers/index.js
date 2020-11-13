import { combineReducers } from 'redux';
import logReducer from './logReducer'

const reducer =  combineReducers({
    log: logReducer
})

export default reducer