import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <ul className='foot-tabs'>
                <li><Link to="/"style={{color: '#FFF8DC'}}>About Me</Link></li>
                <li><Link to="/projects"style={{color: '#FFF8DC'}}>Projects</Link></li>
                <li><Link to="/contact" style={{color: '#FFF8DC'}}>Contact</Link></li>
            </ul>
            <ul className='social-media'>
                <li><a href="https://github.com/ACatWalks" style={{color: '#FFF8DC'}}>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/amandacwoods/" style={{color: '#FFF8DC'}}>LinkedIn</a></li>
            </ul>
            <p className='copyright' style={{color: '#FFF8DC'}}>©2022 Amanda C. Woods</p>
            <Outlet />
        </div>
    )
}

export default Footer