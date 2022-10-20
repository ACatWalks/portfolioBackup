import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Nav() {
    return (
        <div className='nav'>
            <ul>
                <div className="my-title">
                    <li><Link to="/" style={{color: '#FFF8DC'}}>Amanda C. Woods</Link></li>
                </div>
                <div className="tabs">
                    <li><Link to="/" style={{color: '#FFF8DC'}}>About Me</Link></li>
                    <li><Link to="/projects" style={{color: '#FFF8DC'}}>Projects</Link></li>
                    <li><Link to="/contact" style={{color: '#FFF8DC'}}>Contact</Link></li>
                    <li><a href="https://github.com/ACatWalks" style={{color: '#FFF8DC'}}>GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/amandacwoods/" style={{color: '#FFF8DC'}}>LinkedIn</a></li>
                </div>
            </ul>
            <Outlet />
        </div>
    )
}

export default Nav