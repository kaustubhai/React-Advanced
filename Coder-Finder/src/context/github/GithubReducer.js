import {
     // eslint-disable-next-line
    SEARCH_USERS, SET_USER, SET_REPOS, SET_ALERT
 } from '../types'

  // eslint-disable-next-line
export default (state, action) => {
    switch (action.type){
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_REPOS:
            return {
                ...state,
                repos: action.payload
            }
        default:
            return state;
    }
}
