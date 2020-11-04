import React from 'react'

const Alert = ({ alert }) => {
    return (
        alert !== '' && (
            <div className="alert alert-light">
                <i style={{marginRight: '25px'}} className="fas fa-info-circle" />
                {alert}
            </div>
        )
    )
}

export default Alert
