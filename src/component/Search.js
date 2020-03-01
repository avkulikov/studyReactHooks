import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/Alert/alertContext'
import {GithubContext} from '../context/Github/githubContext'

export const Search = () => {
    const {show, hide} = useContext(AlertContext)
    const {search, clearUsers} = useContext(GithubContext)
    const [value, setValue] = useState('')

    const onSubmit = event => {
        if (event.key === 'Enter') {
            if (value) {
                hide()
                search(undefined, value)
                return
            }

            clearUsers()
            show('Введите данные пользователя!')
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                value={value}
                onChange={event => setValue(event.target.value.trim())}
                onKeyPress={onSubmit}
            />
        </div>
    )
}

/* <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                value={value}
                onChange={event => setValue(event.target.value.trim())}
                onKeyPress={onSubmit}
            />
        </div>
         */