import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({icon, title}) => {
    return (
        <div style={{ display: 'flex', height: '60px'}} className="navbar bg-primary">
            <h2 style={{float: 'left' ,justifyItems:"center"}}>
                <i className={icon}></i> {title}
            </h2>
            <ul style={{float: 'right'}}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>

        </div>
    )
}

Navbar.defaultProps = {
    icon: 'fab fa-github',
    title: 'Coder Finder'
}

export default Navbar
