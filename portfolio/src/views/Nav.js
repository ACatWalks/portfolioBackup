import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Nav() {
    return (
        <div className='nav'>
            <ul>
                <div className="my-title">
                    <li><Link to="/">Amanda C. Woods</Link></li>
                </div>
                <div className="tabs">
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="https://github.com/ACatWalks">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/amandacwoods/">LinkedIn</a></li>
                </div>
            </ul>
            <Outlet />
        </div>
    )
}

export default Nav