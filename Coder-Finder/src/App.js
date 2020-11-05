import React, { Fragment } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import About from './components/pages/About' 
import User from './components/pages/User'
import Search from './components/layouts/Search'
import Alert from './components/layouts/Alert'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {

   // eslint-disable-next-line

  // const searchUsers = async (user) => {
  //   const response = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   setUsers(response.data.items)
  // }

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className = "App">
            <Navbar/>
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/">
                  <Fragment>
                    <Search/>
                    <Users/>
                  </Fragment>
                </Route>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' component={User}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
 