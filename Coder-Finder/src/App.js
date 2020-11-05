import React, { Fragment, useState } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import About from './components/pages/About'
import axios from 'axios'
import User from './components/pages/User'
import Search from './components/layouts/Search'
import Alert from './components/layouts/Alert'
import GithubState from './context/GithubState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {

   // eslint-disable-next-line
  const [users, setUsers] = useState([])  
  const [user, setUser] = useState({})  
  const [repos, setRepos] = useState([])
  const [alert, setAlert] = useState('')

  // const searchUsers = async (user) => {
  //   const response = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   setUsers(response.data.items)
  // }

  const alertUser = (msg) => {
    setAlert(msg)

    setTimeout(() => {setAlert('')}, 3000)
  }

  const getUser = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    setUser(response.data)
  }

  const getRepos = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=created&per_page=5`)
    setRepos(response.data)
  }

  return (
    <GithubState>
      <Router>
        <div className = "App">
          <Navbar title="Coder Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/">
                <Fragment>
                  <Search alertUser={alertUser} />
                  <Users alertUser={alertUser} />
                </Fragment>
              </Route>
              <Route exact path='/about'>
                <About/>
              </Route>
              <Route exact path='/user/:login' render={
                props => <User {...props} user={user} repos={repos} getRepos={getRepos} getUser={getUser}/>
              }>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  )
}

export default App
 