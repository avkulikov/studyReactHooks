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
    const search = async valueSearch => {
        setLoading()
        // ...

        dispatch({type: GITHUB_SEARCH_USERS, payload: []})
    }
    const getUser = async nickName => {
        setLoading()
        // ...

        dispatch({type: GITHUB_GET_USER, payload: {}})
    }
    const getRepos = async repoName => {
        setLoading()
        // ...

        dispatch({type: GITHUB_GET_REPOS, payload: []})
    }
    const clearUsers = () => dispatch({type: GITHUB_CLEAR_USERS})
    const setLoading = () => dispatch({type: GITHUB_SET_LOADING})

    return (
        <GithubContext.Provider value={{
            search,
            getUser,
            getRepos,
            clearUsers,
            setLoading,
            github: state
        }}>
            {children}
        </GithubContext.Provider>
    )
}
