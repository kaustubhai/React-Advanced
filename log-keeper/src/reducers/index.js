import { combineReducers } from 'redux';
import logReducer from './logReducer'
import techReducer from './techReducer'

const reducer =  combineReducers({
    log: logReducer,
    tech: techReducer
})

export default reducer