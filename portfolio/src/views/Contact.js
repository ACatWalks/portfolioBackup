import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import {FaEnvelope} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaFileDownload} from "react-icons/fa"

function Contact() {
    return (
        <div className='contact'>
            <Nav />
            <h1>Contact Me</h1>
            <ul>
                <li id="email"><FaEnvelope /><strong>Email</strong>:  acwoods314@gmail.com</li>
                <li id="github"><FaGithub /><strong>GitHub</strong>:     <a href="https://github.com/ACatWalks">https://github.com/ACatWalks</a></li>
                <li id="linkedin"><FaLinkedin /><strong>LinkedIn</strong>:   <a href="https://www.linkedin.com/in/amandacwoods/">https://www.linkedin.com/in/amandacwoods/</a></li>
                <li id="resume"><FaFileDownload /><strong>Resume</strong>:     <button>Download</button></li>
            </ul>
            <Footer />
        </div>
    )
}

export default Contact