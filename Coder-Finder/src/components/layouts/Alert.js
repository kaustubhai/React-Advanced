import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
    const alertContext = useContext(AlertContext) 
    return (
        alertContext.alert !== '' && (
            <div className="alert alert-light">
                <i style={{marginRight: '25px'}} className="fas fa-info-circle" />
                {alertContext.alert}
            </div>
        )
    )
}

export default Alert
