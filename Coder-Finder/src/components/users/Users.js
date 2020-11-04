import React from 'react'
import UserItem from './UserItem'

const users = ({ users, alertUser }) => {
    
    if (!users){
        return (<h2>Loading...</h2>)
    }

    if (!users.map)
        alertUser('No result found matching the searched criteria')

    return (
        <div style={userStyle}>
            {   
                users.map && users.map((user) => 
                    <UserItem user={user} key={user.id} />
                )
            }
        </div>
    )
}

export default users

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
