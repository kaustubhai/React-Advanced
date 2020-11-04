import React from 'react'
import UserItem from './UserItem'

const users = ({ users, loading }) => {
    
    if (!users){
        return (<h2>Loading...</h2>)
    }

    return (
        <div style={userStyle}>
            {   
                users.map((user) => 
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
