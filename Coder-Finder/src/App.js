import React, { Component, Fragment, useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import About from './components/pages/About'
import axios from 'axios'
import User from './components/pages/User'
import Search from './components/layouts/Search'
import Alert from './components/layouts/Alert'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {

  const [users, setUsers] = useState([1])  
  const [user, setUser] = useState({})  
  const [repos, setRepos] = useState([])
  const [alert, setAlert] = useState('')

  useEffect( async () => {
    const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setUsers(response.data)
  }, [])

  const searchUsers = async (user) => {
    const response = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setUsers(response.data.items)
  }

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
    <Router>
      <div className = "App">
        <Navbar title="Coder Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/">
              <Fragment>
                <Search searchUsers={searchUsers} alertUser={alertUser} />
                <Users alertUser={alertUser} users={users} />
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
  )
}

export default App
 