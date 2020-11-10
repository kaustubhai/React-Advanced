import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'

const Navbar = ({ icon, title }) => {

    const authContext = useContext(AuthContext)

    const { isAuthenticated, logout, user } = authContext
    
    const onClick = (e) => {
        logout()
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name} </li>
            {/* eslint-disable-next-line */}
            <li><a href="/login" onClick={onClick}><i className="fa fa-sign-out"></i><span className="hide-sm">Logout</span></a></li>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link> 
            </li>
        </Fragment>
    )

    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}></i> {title}
            </h1>
            <ul>
                { isAuthenticated ? authLinks : guestLinks}
           </ul>
        </div>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar
