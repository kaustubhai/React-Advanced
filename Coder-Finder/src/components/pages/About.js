import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <h1>About this App</h1>
            <p>This app uses github api to render all its user and them filter them on basis of your search. This matches, user's username, bio and readme to match the searched term with a user.</p>
            <a href="/" className="btn btn-outline my-2">Go to Home</a>
        </Fragment>
    )
}

export default About
