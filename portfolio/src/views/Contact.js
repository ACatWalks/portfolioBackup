import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function Contact() {
    return (
        <div className='contact'>
            <Nav />
            <h1>Contact Me</h1>
            <ul>
                <li id="email"><strong>Email</strong>:  acwoods314@gmail.com</li>
                <li id="github"><strong>GitHub</strong>:     <a href="https://github.com/ACatWalks">https://github.com/ACatWalks</a></li>
                <li id="linkedin"><strong>LinkedIn</strong>:   <a href="https://www.linkedin.com/in/amandacwoods/">https://www.linkedin.com/in/amandacwoods/</a></li>
                <li id="resume"><strong>Resume</strong>:     <button>Download</button></li>
            </ul>
            <Footer />
        </div>
    )
}

export default Contact