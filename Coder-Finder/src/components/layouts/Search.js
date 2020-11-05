import React, { useState, useContext } from 'react'
import GithubContext from '../../context/GithubContext'

const Search = ({ alertUser }) => {
    
    const githubContext = useContext(GithubContext)

    const [text, setText] = useState('')

    return (
        <div>
            <form className="form" onSubmit={(e) => {
                e.preventDefault();
                if (text === '') {
                alertUser('Please Enter something to search')
                } else {
                githubContext.searchUsers(text);
                setText('');
                }}}>
                <input type="text" name="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="Search Coders" />
                <input type="submit" value="search" className="btn btn-dark btn-block"/>
            </form>
        </div>
    )
}

export default Search