import React from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'

const users = ({users, loading}) => {

    if (loading)
        return <Spinner/>        

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
