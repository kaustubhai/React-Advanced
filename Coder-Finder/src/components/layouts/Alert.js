import React from 'react'

const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div className="alert alert-light">
                <i style={{marginRight: '25px'}} className="fas fa-info-circle" />
                {alert.msg}
            </div>
        )
    )
}

export default Alert
