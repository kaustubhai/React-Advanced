import React, { Component } from 'react'

export default class Search extends Component {

    state = {
        text: ''
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={(e) => {
                    e.preventDefault();
                    if(this.state.text)
                        this.props.searchUsers(this.state.text)
                    else
                        this.props.alertUser('Please Enter Something')
                    }}>
                    <input type="text" name="text" onChange={(e) => this.setState({text: e.target.value})} value={this.state.text} placeholder="Search Coders" />
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}
