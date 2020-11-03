import React, { Component, Fragment } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import About from './components/pages/About'
import axios from 'axios'
import User from './components/pages/User'
import Search from './components/layouts/Search'
import Alert from './components/layouts/Alert'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export class App extends Component {

  state = {
    users: [],
    alert: null
  }

  async componentDidMount() {
    this.setState({ loading: true})
    const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({loading: false, users: response.data})
  }

  searchUsers = async (user) => {
    this.setState({ loading: true})
    const response = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ loading: false, users: response.data.items })
    if (this.state.users.length === 0)
      this.alertUser('No Result Found, matching the input')
  }

  alertUser = (msg) => {
    this.setState({ alert: { msg } })
    
    setTimeout(() => this.setState({ alert: null }), 3000)
  }

  getUser = async (username) => {
    this.setState({ loading: true})
    const response = await axios.get(`https://api.github.com/users/${username}`)
    this.setState({ user: response.data })
    return response.data
  }

  getRepos = async (username) => {
    this.setState({ loading: true})
    const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=created&per_page=5`)
    this.setState({ repos: response.data })
    return response.data
  }

  render() {
    return (
      <Router>
        <div className = "App">
          <Navbar title="Coder Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/">
                <Fragment>
                  <Search searchUsers={this.searchUsers} alertUser={this.alertUser} />
                  <Users users={this.state.users} />
                </Fragment>
              </Route>
              <Route exact path='/about'>
                <About/>
              </Route>
              <Route exact path='/user/:login' render={
                props => <User {...props} getRepos={this.getRepos} getUser={this.getUser}/>
              }>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
 