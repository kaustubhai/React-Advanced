import React from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About' 
import User from './components/pages/User'
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
                <Route exact path="/" component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' component={User}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
 