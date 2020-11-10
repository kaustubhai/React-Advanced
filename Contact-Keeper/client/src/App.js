import React, { Fragment } from 'react'
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactState from './components/context/Contacts/ContactState';
import AuthState from './components/context/auth/AuthState';
import AlertState from './components/context/alert/AlertState';
import setAuthToken from './components/utils/setAuthToken'

if (localStorage.getItem('token'))
  setAuthToken(localStorage.getItem('token'))

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>  
  );
}

export default App;
