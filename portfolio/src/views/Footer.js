import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <ul className='foot-tabs'>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul className='social-media'>
            <li><a href="https://github.com/ACatWalks">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/amandacwoods/">LinkedIn</a></li>
            </ul>
            <p className='copyright'>©2022 Amanda C. Woods</p>
            <Outlet />
        </div>
    )
}

export default Footer