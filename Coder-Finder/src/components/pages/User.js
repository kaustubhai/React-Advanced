import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Repos from '../users/Repos';

export default class User extends Component {

    state = {
        user: {},
        repos: []
    }

    async componentDidMount () {
        const temp = await this.props.getUser(this.props.match.params.login)
        const temp2 = await this.props.getRepos(this.props.match.params.login)
        this.setState({ user: temp })
        this.setState({ repos: temp2 })
        console.log(this.state.repos)
    }

    render() {

        const { login, avatar_url, type, bio, html_url, hireable, followers, following, public_repos, public_gists} = this.state.user
        
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
                            <a target="_blank" href={html_url} className="btn btn-dark my-2">Github Profile</a>
                        }
                    </div>
                </div>
                <div className="card text-center">
                    <Repos repos={this.state.repos}/>
                    <div className="badge badge-dark">Followers {followers} </div>
                    <div className="badge badge-light">Following {following} </div>
                    <div className="badge badge-danger">Repos {public_repos} </div>
                    <div className="badge badge-success">Gists {public_gists} </div>
                </div>
                <Link to="/" className="btn btn-light">Back to Search</Link>
            </Fragment>
        )
    }
}
