import React, {useReducer, useContext} from 'react'
import axios from '../../utils/axios/github.axios'
import {AlertContext} from '../Alert/alertContext'
import {GithubContext} from './githubContext'
import {githubReducer} from './githubReducer'
import {
    GITHUB_CLEAR_USERS,
    GITHUB_GET_REPOS,
    GITHUB_GET_USER,
    GITHUB_SEARCH_USERS,
    GITHUB_SET_LOADING
} from '../types'

// console.log('process.env', process.env)
const
    CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID,
    CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    withCreditenals = url => `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)
    const {show} = useContext(AlertContext)

    const search = async (where = 'users', query = 'avkulikov') => {
        try {
            setLoading()
            const response = await axios.get(withCreditenals(`search/${where}?q=${query}&`))

            dispatch({type: GITHUB_SEARCH_USERS, payload: response.data.items})
        } catch (error) {
            show(`[Ошибка!]: ${error.message}`, 'danger')
        }
    }

    const getUser = async login => {
        setLoading()
        try {
            setLoading()
            const response = await axios.get(withCreditenals(`users/${login}?`))

            dispatch({type: GITHUB_GET_USER, payload: response.data})
        } catch (error) {
            show(`[Ошибка!]: ${error.message}`, 'danger')
        }
    }

    const getRepos = async nameUser => {
        setLoading()
        try {
            setLoading()
            const response = await axios.get(withCreditenals(`users/${nameUser}/repos?per_page=5&`))

            dispatch({type: GITHUB_GET_REPOS, payload: response.data})
        } catch (error) {
            show(`[Ошибка!]: ${error.message}`, 'danger')
        }

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
