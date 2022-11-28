import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function About() {
    return (
        <div className='about'>
            <Nav />
            <h2 id='headline'>About Me</h2>
            <div className='container'>
                    <div className='left'>
                        <h2>Amanda C. Woods</h2>
                        <h4>Problem Solver. Developer. Visual Storyteller.</h4>
                        <p>I currently work as a substitute teacher, but I've recently completed a software development course in which I have gained fundamental knowledge of Javascript, React, HTML, CSS, and SCSS among others, to the extent that I made a responsive browser game modeled on the board game Clue. I also created an app that allows substitute teachers to rate school districts and schools and a telehealth app that allows patients to chat with a doctor. In my current position I succeed by identifying issues before they happen and being flexible about taking on new challenges. I found that I enjoy applying these skills to software development as well and I am passionate about designing technological solutions to real-world problems, so I'm targeting a software development role, preferably front end.</p>
                    </div>
                    <div className='right'>
                    <p>Insert Photo Here</p>
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default About