import {
     // eslint-disable-next-line
    SEARCH_USERS, SET_USER, SET_REPOS, SET_ALERT
 } from './types'

  // eslint-disable-next-line
export default (state, action) => {
    switch (action.type){
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}
