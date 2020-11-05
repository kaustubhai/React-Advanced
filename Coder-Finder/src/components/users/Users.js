import React, { useContext } from 'react'
import UserItem from './UserItem'
import GithubContext from '../../context/GithubContext'

const Users = ({ users, alertUser }) => {

    const githubContext = useContext(GithubContext)
    
    if (!githubContext.users){
        return (<h2>Loading...</h2>)
    }

    if (!githubContext.users.map)
        alertUser('No result found matching the searched criteria')

    return (
        <div style={userStyle}>
            {   
                githubContext.users.map && githubContext.users.map((user) => 
                    <UserItem user={user} key={user.id} />
                )
            }
        </div>
    )
}

export default Users

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
