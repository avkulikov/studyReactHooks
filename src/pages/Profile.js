import React, {useContext, useEffect} from 'react'
import {GithubContext} from '../context/Github/githubContext'
import {Link} from 'react-router-dom'
import {ReposCard} from '../component/ReposCard'
export const Profile = ({match}) => {
    const {getUser, getRepos, github: {loading, user, repos}} = useContext(GithubContext)
    const urlName = match.params.name

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <div className="spinner-grow" style={{width: '3rem', height: '3rem'}
        } role="status" >
            <span className="sr-only">Loading...</span>
        </div >
    }

    console.log('user', user)
    const {
        name, company, avatar_url,
        location, bio,
        blog, login,
        html_url, followers, following,
        public_repos, public_gist
    } = user

    return <>
        <Link to="/" className="btn btn-link">На главную</Link>
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col text-center">
                        <img style={{width: '300px'}} src={avatar_url} alt={name} />
                        <h1>{name}</h1>
                        {location && <p>Местоположение: {location}</p>}
                    </div>
                    <div className="col">
                        {bio && <>
                            <h3>BIO</h3>
                            <p>{bio}</p>
                        </>}
                        <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Открыть профиль</a>
                        <ul>
                            {login && <li>
                                <strong>Имя пользователя: </strong> {login}
                            </li>}
                            {company && <li>
                                <strong>Компания: </strong> {company}
                            </li>}
                            {blog && <li>
                                <strong>Веб-сайт: </strong> {blog}
                            </li>}
                        </ul>
                        <div className="badge badge-primary">Отслеживают: {followers}</div>
                        <div className="badge badge-success">Отслеживает: {following}</div>
                        <div className="badge badge-info">Репозиториев: {public_repos}</div>
                        <div className="badge badge-dark">Gists: {public_gist}</div>
                    </div>
                </div>
            </div>
        </div>
        <ReposCard repos={repos} />
    </>
}
