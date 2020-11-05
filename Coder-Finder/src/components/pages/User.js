import React, { Fragment , useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Repos from '../users/Repos';
import GithubContext from '../../context/github/GithubContext'

const User = ({match}) => {

    const githubContext = useContext(GithubContext);

    useEffect( () => {
        githubContext.getUser(match.params.login)
        githubContext.getRepos(match.params.login)
        // eslint-disable-next-line
    }, [])

    if (githubContext.user.login !== match.params.login)
        return (<h2> Loading... </h2>)

    const { login, avatar_url, bio, html_url, hireable, followers, following, public_repos, public_gists} = githubContext.user
    
    return (
        <Fragment>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" style={{ width: '150px' }} alt={login} />
                    <h1>{login}</h1>
                    <div>
                    Hireable: {' '}
                    {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
                    </div>
                </div>
                
                <div className="all-center">
                    {
                        { bio } && <Fragment>
                            <h3>Who am I?</h3>
                            <p>{bio}</p>
                        </Fragment>
                    }
                    {
                        <a target="_blank" rel="noreferrer" href={html_url} className="btn btn-dark my-2">Github Profile</a>
                    }
                </div>
            </div>
            <div className="card text-center">
                <Repos/>
                <div className="badge badge-dark">Followers {followers} </div>
                <div className="badge badge-light">Following {following} </div>
                <div className="badge badge-danger">Repos {public_repos} </div>
                <div className="badge badge-success">Gists {public_gists} </div>
            </div>
            <Link to="/" className="btn btn-light">Back to Search</Link>
        </Fragment>
    )
}

export default User