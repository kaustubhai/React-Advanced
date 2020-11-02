import React, { Component } from 'react'

export default class User extends Component {

    state = {
        hello: {}
    }

    async componentDidMount () {
        const temp = await this.props.getUser(this.props.match.params.login)
        this.setState({ hello: temp[0] })
        
        console.log(this.state.hello)
        console.log(temp)
    }

    render() {

        const { login, avatar_url, location, bio, html_url, hireable} = this.state.hello

        const {loading} = this.props.loading

        return (
            <div>
                {login ? login : 'name'}
            </div>
        )
    }
}
