import React, { useReducer } from 'react'
import axios from 'axios'
import GithubReducer from './GithubReducer'
import GithubContext from './GithubContext'
 // eslint-disable-next-line
import { SEARCH_USERS, SET_REPOS, SET_ALERT, SET_USER } from '../types'

const GithubState = (props) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        alert: ''
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const searchUsers = async (user) => {
        const response = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        dispatch({ type: SEARCH_USERS, payload: response.data.items })
    }

    const getUser = async (username) => {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      dispatch({ type: SET_USER, payload: response.data})
    }

    const getRepos = async (username) => {
      const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=created&per_page=5`)
      dispatch({ type: SET_REPOS, payload: response.data})
    }

    return (<GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            alert: state.alert,
            searchUsers,
            getUser,
            getRepos
    }}>
        {props.children}
    </GithubContext.Provider>)
    
}

export default GithubState
