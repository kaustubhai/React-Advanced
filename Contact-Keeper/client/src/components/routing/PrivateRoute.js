import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const authContext = useContext(AuthContext)

    const { isAuthenticated, loading } = authContext

    return (
        <Route {...rest} render={
            props => {
                if (isAuthenticated !== null && !loading)
                    return <Component {...props} />
                else {
                    return <Redirect to="/login" />
                }
            }
        }>
        </Route>
    )
}

export default PrivateRoute
