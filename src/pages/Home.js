import React, {useContext} from 'react'
import {Search} from '../component/Search'
import {Card} from '../component/Card'
import {GithubContext} from '../context/Github/githubContext'

export const Home = () => {
    const {github: {loading, users}} = useContext(GithubContext)
    return (
        <React.Fragment>
            <Search />
            <div className="row">
                {loading ?
                    <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    : users.map(user => (
                        <div className="col-sm-4 mb-4" key={user.id}>
                            <Card user={user} />
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    )
}
