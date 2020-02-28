import React, {useReducer} from 'react'
import {GithubContext} from './githubContext'
import {githubReducer} from './githubReducer'
import {
    GITHUB_CLEAR_USERS,
    GITHUB_GET_REPOS,
    GITHUB_GET_USER,
    GITHUB_SEARCH_USERS,
    GITHUB_SET_LOADING
} from '../types'

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)
    const hide = () => dispatch({type: ALERT_HIDE})
    const show = (text, type = 'secondary') => {
        dispatch({
            type: ALERT_SHOW,
            payload: {type, text}
        })
    }

    return (
        <GithubContext.Provider
            value={{hide, show, alert: state}}
        >
            {children}
        </GithubContext.Provider>
    )
}
