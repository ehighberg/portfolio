import React from 'react'
import '../style/about.css'

const About = React.forwardRef((props, ref) => {
  return (
    <summary>
      <h1>About Me</h1>
      <p className='about-main'>Full-stack developer and data scientist, driven to understand systems and their interactions. Reinforced by attention to detail and determination, I welcome and conquer challenges in any domain.</p>
      <br />
      <p className='about-zinger'>Ask me about high-concept science-fiction or non-Newtonian calculus.</p>
      <ul className='about-links'>
        <li><a target="_blank" rel="noopener noreferrer" href='RESUME'>Resume</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href='LINKEDIN'>LinkedIn</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href='GITHUB'>Github</a></li>
      </ul>
    </summary>
  )
})

export default About
