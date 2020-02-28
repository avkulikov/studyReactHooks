import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/Alert/alertContext'

export const Search = () => {
    const {show} = useContext(AlertContext)
    const [value, setValue] = useState('')
    const onSubmit = event => {
        if (event.key === 'Enter') {
            if(value.trim()){
                console.log('Make request with: ', value)
                return
            }
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
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}
