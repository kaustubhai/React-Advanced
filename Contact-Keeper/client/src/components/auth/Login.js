import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/auth/AuthContext'
import AlertContext from '../context/alert/AlertContext'
import Alerts from '../layouts/Alerts'

const Login = props => {

    const authContext = useContext(AuthContext)
    const alertContext = useContext(AlertContext)

    const { setAlert } = alertContext
    const { loginUser, errors, isAuthenticated } = authContext

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    useEffect(() => {

        if (isAuthenticated){
            props.history.push({
                pathname: '/'
            })
        }

        if (errors !== null)
            setAlert(errors, 'danger')
        
        //eslint-disable-next-line
    }, [errors, isAuthenticated])

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (email.trim() === '' || password.trim() === '')
            setAlert('Please enter all fields', 'danger')
        else
            loginUser({ email, password })
    }

    return (
        <div className="container form-container">
            <h1 className="my-2">
                Account <span className="text-primary">Login</span>
            </h1>
            <Alerts/>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email <span className="text-danger">*</span> </label>
                    <input type="email" name="email" value={email} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password <span className="text-danger">*</span> </label>
                    <input type="password" name="password" value={password} onChange={onChange}></input>
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Login" />
            </form>
        </div>
    )
}

export default Login
