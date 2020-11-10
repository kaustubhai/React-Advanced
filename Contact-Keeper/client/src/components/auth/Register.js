import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../context/alert/AlertContext'
import Alerts from '../layouts/Alerts'
import AuthContext from '../context/auth/AuthContext'


const Register = () => {

    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const { setAlert } = alertContext
    const { registerUser, errors } = authContext

    useEffect(() => {
        if (errors !== null)
            setAlert(errors, 'danger')
        
        //eslint-disable-next-line
    }, [errors])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = user

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (name.trim() === '' || email.trim() === '' || password.trim() === '')
            setAlert('Please enter all fields', 'danger')
        else if (password !== password2)
            setAlert('Your Passwords dont match', 'danger')
        else if (password.length < 5)
            setAlert('Password needs to be of minimum 5 characters', 'danger')
        else{
            registerUser({
                name, email, password
            })
        }
    }

    return (
        <div className="container form-container">
            <h1 className=" my-2">
                Account <span className="text-primary">Register</span>
            </h1>
            <Alerts/>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name <span className="text-danger">*</span> </label>
                    <input type="text" name="name" value={name} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email <span className="text-danger">*</span> </label>
                    <input type="email" name="email" value={email} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password <span className="text-danger">*</span> </label>
                    <input type="password" name="password" value={password} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm password <span className="text-danger">*</span> </label>
                    <input type="password" name="password2" value={password2} onChange={onChange}></input>
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Register" />
            </form>
        </div>
    )
}

export default Register
