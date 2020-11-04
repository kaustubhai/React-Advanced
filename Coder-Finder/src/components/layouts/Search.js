import React, { Component, useState } from 'react'

const Search = ({searchUsers, alertUser}) => {

    const [text, setText] = useState('')

    return (
        <div>
            <form className="form" onSubmit={(e) => {
                e.preventDefault();
                if(text.trim() !== '')
                    searchUsers(text)
                else
                    console.log(text)
                }}>
                <input type="text" name="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="Search Coders" />
                <input type="submit" value="search" className="btn btn-dark btn-block"/>
            </form>
        </div>
    )
}

export default Search